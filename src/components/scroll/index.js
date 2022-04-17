import BScroll from 'better-scroll'
import React, { forwardRef, useState, useRef, useEffect, useImperativeHandle, useMemo } from 'react';
import { PropTypes } from 'prop-types';
import { ScrollContainer } from './style';
import Loading from "../../baseUI/loading";
import Loading2 from "../../baseUI/loading-v2";
import { debounce } from '../../api/utils';

import styled from'styled-components';

const PullUpLoading = styled.div`
  position: absolute;
  left:0; right:0;
  bottom: 0px;
  height: 60px;
  margin: auto;
  z-index: 100;
`;

const PullDownLoading = styled.div`
  position: absolute;
  left:0; right:0;
  top: 0px;
  height: 30px;
  margin: auto;
  z-index: 100;
`;

// 由于Scroll组件经常被取到原生DOM，即其包裹的DOM，函数式组件不能被直接调用ref，因此用forwardRef包裹
// ref最终只能被挂载到class组件或html元素
// 常规函数和class组件不接受ref参数，props中也不存在ref
const Scroll = forwardRef((props, ref) => {
    // useState返回数组，第一项为状态值，第二项为更新状态的函数
    const [bScroll, setBScorll] = useState();
    // current指向初始化BScroll实例需要的DOM元素
    const scrollContainerRef = useRef();
    const {
        direction,
        click, 
        refresh, 
        pullDown, 
        pullDownLoading, 
        pullUp, 
        pullUpLoading, 
        onScroll, 
        bounceTop, 
        bounceBottom
    } = props;

    let pullUpDebounce = useMemo(() => {
        return debounce(pullUp, 500);
    }, [pullUp]);

    let pullDownDebounce = useMemo(() => {
        return debounce(pullDown, 500);
    }, [pullDown]);

    // 新建BScroll实例
    useEffect(() => {
        // initialize BScroll
        const scroll = new BScroll(scrollContainerRef.current, {
            scrollX: direction === 'horizental',
            scrollY: direction === 'vertical',
            // 监听方式，3表示在滚动时监听
            probeType: 3,
            click: click,
            bounce: {
                top: bounceTop,
                bottom: bounceBottom
            }
        });
        setBScorll(scroll);
        // componentWillUnmount
        return () => {
            setBScorll(null);
        }
        // eslint-disable-next-line
    }, []);

    // 监听滚动，绑定onScroll事件
    useEffect(() => {
        if (!bScroll || !onScroll) {
            return;
        }
        bScroll.on('scroll', onScroll);
        return () => {
            bScroll.off('scroll', onScroll);
        }
    }, [bScroll, onScroll]);

    // 上拉加载
    useEffect(() => {

        if (!bScroll || !pullUp) {
            return;
        }
        bScroll.on('scrollEnd', () => {
            // 判断是否到达了底部
            if (bScroll.y <= bScroll.maxScrollY + 100) {
                pullUpDebounce()
            }
        });
        return () => {
            bScroll.off('scrollEnd');
        }
    }, [pullUp, bScroll, pullUpDebounce]);

    // 下拉加载
    useEffect(() => {
        if (!bScroll || !pullDown) {
            return;
        }
        bScroll.on('touchEnd', (pos) => {
            // 判断是否到达了底部
            if (pos.y > 50) {
                pullDownDebounce();
            }
        });
        return () => {
            bScroll.off('touchEnd');
        }
    }, [pullDown, bScroll, pullDownDebounce]);

    // 多个useEffect，按照代码顺序执行
    // 每次渲染或更新判断是否更新滚动部分
    useEffect(() => {
        if (refresh && bScroll) {
            bScroll.refresh();
        }
    });

    useImperativeHandle(ref, () => ({
        refresh() {
            if (bScroll) {
                bScroll.refresh();
                bScroll.scrollTo(0, 0);
            }
        },
        getBScroll() {
            if (bScroll) {
                return bScroll;
            }
        }
    }));

    const PullUpDisplayStyle = pullUpLoading ? { display: ''} : { display: 'none' };
    const PullDownDisplayStyle = pullDownLoading ?  { display: ''} : { display: 'none' };
    return (
        <ScrollContainer ref={scrollContainerRef}>
            {props.children}
            <PullDownLoading style={PullDownDisplayStyle}><Loading2 /></PullDownLoading>
            <PullUpLoading style={PullUpDisplayStyle}><Loading /></PullUpLoading>
        </ScrollContainer>
    )
});
// Scroll组件参数默认值
Scroll.defaultProps = {
    direction: 'vertical',
    click: true,
    refresh: true,
    onScroll: null,
    pullUp: null,
    pullDown: null,
    pullUpLoading: false,
    pullDownLoading: false,
    bounceTop: true,
    bounceBottom: true
}
// Scroll组件参数限制
Scroll.propTypes = {
    direction: PropTypes.oneOf(['vertical', 'horizental']), // 滚动的方向
    click: PropTypes.bool, // 是否支持点击
    refresh: PropTypes.bool, // 是否刷新
    onScroll: PropTypes.func, // 滑动时触发的回调函数，**********当变量类型限制为函数时，用func
    pullUp: PropTypes.func, // 上拉加载逻辑
    pullDown: PropTypes.func, // 下拉加载逻辑
    pullUpLoading: PropTypes.bool, // 是否显示上拉加载动画
    pullDownLoading: PropTypes.bool,  // 是否显示下拉加载动画
    bounceTop: PropTypes.bool, // 是否支持向上吸顶
    bounceBottom: PropTypes.bool // 是否支持向下吸顶
}

export default Scroll;