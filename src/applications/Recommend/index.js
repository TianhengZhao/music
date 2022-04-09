import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as action from "./store/actionCreator";
import Slider from "../../components/slider";
import RecommendList from "../../components/list";
import Scroll from "../../components/scroll";
import {Content} from "./style";
import { forceCheck } from "react-lazyload";
import Loading from '../../baseUI/loading';

function Recommend(props) {
    // eslint-disable-next-line
    const { bannerListImm, recommendListImm, songsCountImm, enterLoading  } = props;
    const { getBannerDataDispatch, getRecommendListDataDispatch } = props;

     // 记得转换回js
     const bannerList = bannerListImm ? bannerListImm.toJS() : [];
     const recommendList = recommendListImm ? recommendListImm.toJS() : [];

     useEffect(() => {
      // 加了判断之后，当再次进入recommend页面，不发送请求，用redux中的缓存数据，但这样两次推荐页内容一样
      // 在 每次进入推荐页页面内容有更新 和 更少耗时 间权衡
      // 但我认为，不用每次进入推荐都更新，想要更新可以自己下拉刷新
      if (!bannerList.length) { 
        getBannerDataDispatch();
      }
      if (!recommendList.length) {
        getRecommendListDataDispatch();
      }
  // eslint-disable-next-line
   }, []);

    return (
      <Content>
        {/*图片懒加载part2，滑动时加载即将显示的图片*/}
        <Scroll onScroll={forceCheck}>
          <div>
            <Slider bannerList={bannerList} />
            <RecommendList recommendList={recommendList} />
          </div>
        </Scroll>
        {/* 当多个请求时何时loading结束，请求出错如何处理？ ———— 好问题，或许可以用promise.all */}
        {enterLoading ? <Loading /> : null}
      </Content>
    );
}

// 将redux全局数据映射到本容器组件props
const mapStateToProps = state => ({
    // 取全局redux中recommend.bannerList
    // 不能在这toJS，否则每次diff对比props都是不同的
    bannerListImm: state.getIn(['recommend', 'bannerList']), // 取多级对象
    recommendListImm: state.getIn(['recommend', 'recommendList']),
   // songsCountImm: state.getIn(['player', 'playList']).size,
    enterLoading: state.getIn(['recommend', 'enterLoading'])
})

const mapDispatchToProps = dispatch => {
    return {
      getBannerDataDispatch() {
        dispatch(action.getBannerList());
      },
      getRecommendListDataDispatch() {
        dispatch(action.getRecommendList());
      }
    }
}

// 将Recommend的UI组件（子）包装成容器组件（父）
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend));  // memo的用途及必要性