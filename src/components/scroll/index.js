import BScroll from 'better-scroll'
import React, { forwardRef, useState, useRef, useEffect, useImperativeHandle } from 'react';
import {PropTypes} from 'prop-types';
import {ScrollContainer} from './style';


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
        // eslint-disable-next-line
        pullDown, 
        // eslint-disable-next-line
        pullDownLoading, 
        // eslint-disable-next-line
        pullUp, 
        // eslint-disable-next-line
        pullUpLoading, 
        // eslint-disable-next-line
        onScroll, 
        bounceTop, 
        bounceBottom
    } = props;
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
                pullUp();
                console.log('pull');
            }
        });
        return () => {
            bScroll.off('scrollEnd');
        }
    }, [pullUp, bScroll]);

    // 下拉加载
    useEffect(() => {
        console.log('touch1');
        if (!bScroll || !pullDown) {
            console.log(pullDown);
            return;
        }
        bScroll.on('touchEnd', (pos) => {
            console.log('touch3');
            // 判断是否到达了底部
            if (pos.y > 50) {
                pullDown();
                console.log('touch');
            }
        });
        return () => {
            bScroll.off('touchEnd');
        }
    }, [pullDown, bScroll]);

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

    return (
        <ScrollContainer ref={scrollContainerRef}>
            {props.children}
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