import React, { useEffect } from "react";
import { connect } from "react-redux";
import  LazyLoad, {forceCheck} from 'react-lazyload';
import * as actions from "./store/actionCreator"
import Horizon from "../../baseUI/horizon-item";
import Scroll from "../../components/scroll";
import {
  NavContainer,
  List,
  ListItem,
  ListContainer
} from "./style";
import Loading from "../../baseUI/loading";
import { renderRoutes } from 'react-router-config';

function Singers(props) {
  const { 
    singerListImm, 
    pullUpLoading, 
    pullDownLoading, 
    pageCount, 
    enterLoading, 
    category, 
    language, 
    alpha 
  } = props;
  const { 
    getHotSingerDispatch, 
    pullUpRefreshDispatch, 
    pullDownRefreshDispatch,
    updateAlphaDispatch,
    updateCategoryDispatch,
    updateLanguageDispatch
  } = props;
  let singerList = singerListImm.toJS();

  let enterDetail = id => {
    props.history.push(`/singers/${id}`);
  }
  let handleUpdateCategory = val => {
    if(category === val) return;
    updateCategoryDispatch(val);
  }
  let handleUpdateLanguage = val => {
    updateLanguageDispatch(val);
  }
  let handleUpdateAlpha = val => {
    updateAlphaDispatch(val);
  }

  let handlePullUp = () => {
    pullUpRefreshDispatch(category, language, alpha, pageCount);
  }
  let handlePullDown = () => {
    pullDownRefreshDispatch(category, language, alpha);
  }



  useEffect(() => {
    // 从redux中获得
    if (!singerList.length && !category && !alpha && !language) {
      getHotSingerDispatch();
    }
    // eslint-disable-next-line
  }, []);

  let renderSingersList = () => {
    return (
      <List>
        {
          singerList.map((item, index) => {
            return (
              <ListItem 
                key={item.accountId + '' + index}
                onClick={() => enterDetail(item.id)}
              >
                <div className="img_wrapper">
                  <LazyLoad placeholder={<img width="100%" height="100%" src={require ('./singer.png')} alt="music"/>}>
                    <img src={`${item.picUrl}?param=300×300`} width="100%" height="100%" alt="singer" />
                  </LazyLoad>
                </div>
                <span className="name">{item.name}</span>
              </ListItem>
            )
          })
        }
      </List>
    )
  }

  return (
    <div>
      <NavContainer>
        {/* 横向滚动要求外部容器宽度固定，且内容宽度大于容器宽度，NavContainer实现了外部容器宽度固定 */}
        {/* 内部宽度在horizon-item里 */}
        <Horizon
          list={categoryTypes}
          title={"歌手类型:"}
          handleClick={handleUpdateCategory}
          oldVal={category}
        />
        <Horizon
          list={languageTypes}
          title={"歌手语言:"}
          handleClick={handleUpdateLanguage}
          oldVal={language}
        />
        <Horizon
          list={alphaTypes}
          title={"歌手首字母:"}
          handleClick={handleUpdateAlpha}
          oldVal={alpha}
        />
      </NavContainer>
      <ListContainer>
        {enterLoading ? <Loading /> : null}
        <Scroll
          onScroll={forceCheck}
          pullUp={ handlePullUp }
          pullDown={ handlePullDown }
          pullUpLoading={pullUpLoading}
          pullDownLoading={pullDownLoading}
        >
          {renderSingersList()}
        </Scroll>
      </ListContainer>
      { renderRoutes(props.route.routes) }
    </div>
  )
}

const mapStateToProps = (state) => ({
  singerListImm: state.getIn(['singers', 'singersList']),
  enterLoading: state.getIn(['singers', 'enterLoading']),
  pullUpLoading: state.getIn(['singers', 'pullUpLoading']),
  pullDownLoading: state.getIn(['singers', 'pullDownLoading']),
  pageCount: state.getIn(['singers', 'pageCount']),
  category: state.getIn(['singers', 'category']),
  language: state.getIn(['singers', 'language']),
  alpha: state.getIn(['singers', 'alpha'])
})

const mapDispatchToProps = (dispatch) => ({
  getHotSingerDispatch() {
    dispatch(actions.getHotSingerList());
  },
  updateCategoryDispatch(val) {
    dispatch(actions.changePageCount(0));
    dispatch(actions.changeCategory(val))
    dispatch(actions.getSingerList());
  },
  updateLanguageDispatch(val) {
    dispatch(actions.changePageCount(0));
    dispatch(actions.changeLanguage(val))
    dispatch(actions.getSingerList());
  },
  updateAlphaDispatch(val) {
    dispatch(actions.changePageCount(0));
    dispatch(actions.changeAlpha(val))
    dispatch(actions.getSingerList());
  },
  pullDownRefreshDispatch(category, language, alpha) {
    dispatch(actions.changePullDownLoading(true));
    dispatch(actions.changePageCount(0));
    if (category === '' && language === '' && alpha === '') {
      dispatch(actions.getHotSingerList());
    } else {
      dispatch(actions.getSingerList(category, language, alpha));
    }
  },
  pullUpRefreshDispatch(category, language, alpha, count) {
    dispatch(actions.changePullUpLoading(true));
    dispatch(actions.changePageCount(count + 1));
    if (category === '' && language === '' && alpha === '') {
      dispatch(actions.refreshMoreHotSingerList());
    } else {
      dispatch(actions.refreshMoreSingerList(category, language, alpha));
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singers));

const categoryTypes = [{
  name: "男歌手",
  key: "1"
},
{
  name: "女歌手",
  key: "2"
},
{
  name: "乐队",
  key: "3"
}
];

const languageTypes = [{
  name: "华语",
  key: "7"
},
{
  name: "欧美",
  key: "96"
},
{
  name: "日本",
  key: "8"
},
{
  name: "韩国",
  key: "16"
},
{
  name: "其他",
  key: "0"
}
];

// 歌手首字母
// eslint-disable-next-line
const alphaTypes = [{
  key: "A",
  name: "A"
},
{
  key: "B",
  name: "B"
},
{
  key: "C",
  name: "C"
},
{
  key: "D",
  name: "D"
},
{
  key: "E",
  name: "E"
},
{
  key: "F",
  name: "F"
},
{
  key: "G",
  name: "G"
},
{
  key: "H",
  name: "H"
},
{
  key: "I",
  name: "I"
},
{
  key: "J",
  name: "J"
},
{
  key: "K",
  name: "K"
},
{
  key: "L",
  name: "L"
},
{
  key: "M",
  name: "M"
},
{
  key: "N",
  name: "N"
},
{
  key: "O",
  name: "O"
},
{
  key: "P",
  name: "P"
},
{
  key: "Q",
  name: "Q"
},
{
  key: "R",
  name: "R"
},
{
  key: "S",
  name: "S"
},
{
  key: "T",
  name: "T"
},
{
  key: "U",
  name: "U"
},
{
  key: "V",
  name: "V"
},
{
  key: "W",
  name: "W"
},
{
  key: "X",
  name: "X"
},
{
  key: "Y",
  name: "Y"
},
{
  key: "Z",
  name: "Z"
}
];