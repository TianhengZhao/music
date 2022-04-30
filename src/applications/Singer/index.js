import React, {useState, useRef, useEffect, useCallback } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from 'react-redux';
import { 
  Container,
  ImgWrapper,
  CollectButton,
  SongListWrapper
} from "./style";
import Header from "../../baseUI/header";
import SongList from "../SongList";
import Scroll from "../../components/scroll";
import { HEADER_HEIGHT } from "../../api/config";
import { changeLoading, clearData, getSingerInfo } from "./store/actionCreator";
import Loading from "../../baseUI/loading";

function Singer(props) {
    const { artistImm, songsImm, loading, getSingerDispatch, changeLoadingDispatch, clearDataDispatch } = props;
    const artist = artistImm.toJS();
    const songs = songsImm.toJS();

    const [showStatus, setShowStatus] = useState(true);

    const collectButton = useRef();
    const imageWrapper = useRef();
    const songScrollWrapper = useRef();
    const songScroll = useRef();
    const header = useRef();
    // 图片的初始高度
    const initHeight = useRef(0);

    const OFFSET = 5;

    useEffect(() => {
      const id = props.match.params.id;
      changeLoadingDispatch();
      getSingerDispatch(id);
      return () => {
        clearDataDispatch();
      }
    }, [getSingerDispatch, changeLoadingDispatch])

    useEffect(() => {
      // offsetHeight返回元素的像素高度（border、padding和水平滚动条）
      // .current访问ref所在元素的DOM对象
      let h = imageWrapper.current.offsetHeight; // 使得图片比例为4:3的高度
      songScrollWrapper.current.style.top = `${h - OFFSET}px`;
      initHeight.current = h;
      songScroll.current.refresh();
    }, [])

    const handleBack = useCallback(() => {
      setShowStatus (false);
    }, []);

    // onScroll的参数是当前位置相对于应有位置偏移对象{x: , y: }
    let handleScroll = pos => {
      let height = initHeight.current;
      const newY = pos.y;
      const imageDOM = imageWrapper.current;
      const buttonDOM = collectButton.current;
      const headerDOM = header.current;
      // 图片去掉和header重叠、去掉和列表重叠所剩的高度，负值
      const minScrollY = -(height - OFFSET) + HEADER_HEIGHT;

      // 拉伸距离/图片高度
      const percent = Math.abs (newY /height);

      // 1.当往下拉，图片放大，按钮下移
      if (newY > 0) {
        // 放大图片
        imageDOM.style["transform"] = `scale(${1 + percent})`;
        // translate3d在3D空间移动元素，三个参数分别是x、y、z轴移动距离
        buttonDOM.style["transform"] = `translate3d(0, ${newY}px, 0)`;
      } else if (newY >= minScrollY) {  // 往上滑动，但列表顶部未到达header       
        imageDOM.style.paddingTop = "75%";
        imageDOM.style.height = 0;
        imageDOM.style.zIndex = -1;
        // 按钮跟着移动且渐渐变透明
        buttonDOM.style["transform"] = `translate3d(0, ${newY}px, 0)`;
        buttonDOM.style["opacity"] = `${1 - percent * 2}`;
      } else if (newY < minScrollY) { // 往上滑动，但是超过 Header 部分       
        // 防止溢出的歌单内容遮住 Header
        headerDOM.style.zIndex = 100;
        // 此时图片高度与 Header 一致
        imageDOM.style.height = `${HEADER_HEIGHT}px`;
        imageDOM.style.paddingTop = 0;
        imageDOM.style.zIndex = 99;
      }
    }

    return (
      <CSSTransition
        in={showStatus}
        timeout={300}
        classNames="fly"
        appear={true}
        unmountOnExit
        onExited={() => props.history.goBack()}
      >
        <Container>
          { loading ? <Loading /> : null}
          <Header title={"返回"} ref={header} handleClick={handleBack}></Header>
          <ImgWrapper bgUrl={artist.picUrl} ref={imageWrapper}>
            <div className="filter"></div>
          </ImgWrapper>
          <CollectButton ref={collectButton}>
            <i className="iconfont icon-collect" />
            <span className="text"> 收藏 </span>
          </CollectButton>
          <SongListWrapper ref={songScrollWrapper}>
            <Scroll ref={songScroll} onScroll={handleScroll}>
              <SongList 
                showCollect={false}
                songs={songs}
              />
            </Scroll>
          </SongListWrapper>
        </Container>
      </CSSTransition>
    )
}

const mapStateToProps = state => ({
  artistImm: state.getIn(['singer', 'artist']),
  songsImm: state.getIn(['singer', 'songsOfArtist']),
  loading: state.getIn(['singer', 'loading'])
})

const mapDispatchToProps = dispatch => {
  return {
    getSingerDispatch(id){
      dispatch(getSingerInfo(id));
    },
    changeLoadingDispatch() {
      dispatch(changeLoading(true));
    },
    clearDataDispatch() {
      dispatch(clearData());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singer));