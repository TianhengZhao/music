import React, {useState, useEffect, useCallback} from 'react';
import {
  Container,
  TopDesc,
  Menu,
  SongItem
} from './style';
import { concactSingerName } from '../../api/utils';
import { CSSTransition } from 'react-transition-group';
import  Header  from '../../baseUI/header/index';
import Scroll from '../../components/scroll';
import { connect } from 'react-redux';
import { getAlbumList, changeEnterLoading } from './store/actionCreator.js';
import { isEmptyObject } from "../../api/utils";
import Loading from '../../baseUI/loading';
import SongList from '../SongList';


function Album (props) {
    const [showStatus, setShowStatus] = useState(true);

    const { currentAlbumImm, getAlbumListDispatch, loading, changeLoadingDispatch } = props;
    let currentAlbum = currentAlbumImm ? currentAlbumImm.toJS() : [];
    const id = props.match.params.id;
   
    // 如果不用useCallback，父组件每次执行会生成不同的handleBack，子组件每次memo结果都不同，导致不必要的重新渲染
    const handleBack = useCallback(() => {
      setShowStatus (false);
    }, []);

    let renderTopDesc = () => {
      return (
        <TopDesc background={currentAlbum.coverImgUrl}>
          <div className='background'></div>
          <div className='img_wrapper'>
            <img src={currentAlbum.coverImgUrl} alt="" />
            <div className="play_count">
              <i className="iconfont icon-listen listen" />
              <span className="count">{ Math.floor(currentAlbum.subscribedCount/1000)/10 }万</span>
            </div>
          </div>
          <div className='desc_wrapper'>
            <div className='title'>{ currentAlbum.name }</div>
            <div className="person">
              <div className="avatar">
                <img src={currentAlbum.creator.avatarUrl} alt="" />
              </div>
              <div className="name">{currentAlbum.creator.nickname}</div>
            </div>
          </div>       
        </TopDesc>
      )
    };

    let renderMenu = () => {
      return (
        <Menu>
          <div>
            <i className="iconfont icon-comment" />
            评论
          </div>
          <div>
            <i className="iconfont icon-like" />
            点赞
          </div>
          <div>
            <i className="iconfont icon-collect" />
            收藏
          </div>
          <div>
            <i className="iconfont icon-more" />
            更多
          </div>
        </Menu>
      )
    }

    let renderSongList = () => {
      return (
        <SongList>
          <div className='first_line'>
            <div className='play_all'>
              <i className='iconfont icon-bofang' />
              <span>播放全部</span>
              <span className='sum'>(共{currentAlbum.tracks.length}首)</span>
            </div>
            <div className='add_list'>
              <i className='iconfont icon-collect' />
              收藏({ Math.floor(currentAlbum.subscribedCount/1000)/10 }万)                
            </div>
          </div>
            <SongItem>
            {
              currentAlbum.tracks.map((item, idx) => {
                return (
                  <li key={item.name+idx}>
                    <span className='index'>{idx + 1}</span>
                    <div className='info'>
                      <span>{item.name}</span>
                      <span>
                        {concactSingerName(item.ar)}-{item.al.name}
                      </span>
                    </div>
                  </li>
                )
              })
            }
            </SongItem>
        </SongList>
      )
    }

    useEffect (() => {
      changeLoadingDispatch();
      getAlbumListDispatch(id);     
    }, [getAlbumListDispatch, changeLoadingDispatch, id]);

    return (
        <CSSTransition
            in={showStatus}  
            timeout={3000} 
            classNames="fly" 
            appear={true} 
            unmountOnExit
            onExited={props.history.goBack}
        >
          <Container> 
            <Header title={"返回"} handleClick={handleBack}></Header>
            {
              !isEmptyObject(currentAlbum) ? (
                <Scroll>
                  <div>
                    { renderTopDesc() }
                    { renderMenu() }
                    {/* { renderSongList() } */}
                    <SongList 
                      collectCount={currentAlbum.subscribedCount}
                      showCollect={true}
                      songs={currentAlbum.tracks}
                    />
                  </div>
                </Scroll>
              ) : null
            }
            { loading ? <Loading /> : null }               
          </Container>
        </CSSTransition>
    )
}

const mapStateTpProps = state => ({
  currentAlbumImm: state.getIn(['album', 'currentAlbum']),
  loading: state.getIn(['album', 'loading'])
})

const mapDispatchToProps = dispatch => {
  return {
    getAlbumListDispatch(id) {
      dispatch(getAlbumList(id));
    },
    changeLoadingDispatch() {
      dispatch(changeEnterLoading(true));
    }
  }
}

export default connect(mapStateTpProps, mapDispatchToProps)(React.memo(Album));