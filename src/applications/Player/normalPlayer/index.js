import React, { useRef, useState } from "react";
import { concactSingerName } from "../../../api/utils";
import {
    NormalPlayerContainer,
    Top,
    Middle,
    ProgressWrapper,
    Bottom,
    Operators,
    CDWrapper,
} from "./style";
import { CSSTransition } from 'react-transition-group';
import animations from "create-keyframe-animation";
import { prefixStyle } from '../../../api/utils';
import ProgressBar from "../../../baseUI/progress-bar";

function NormalPlayer(props) {
    const { song, fullScreen, toggleFullScreen } = props;
    const normalPlayerRef = useRef();
    const cdWrapperRef = useRef();
    

    // 进入时帧动画
    const enter = () => {
        normalPlayerRef.current.style.display = "block";
        const { x, y, scale } = _getPosAndScale();
        let animation = {
            0: {
                transform: `translate3d(${-x}px, ${y}px, 0) scale(${scale})`
            },
            60: {
                transform: `translate3d(0, 0, 0) scale(1.1)`
            },
            100: {
                transform: `translate3d(0, 0, 0) scale(1)`
            }
        }
        animations.registerAnimation({
            name: "move",
            animation,
            presets: {
                duration: 400,
                easing: "linear"
            }
        })
        animations.runAnimation(cdWrapperRef.current, "move");

    }
    const afterEnter = () => {
        // 进入后解绑帧动画
        const cdWrapperDom = cdWrapperRef.current;
        animations.unregisterAnimation("move");
        cdWrapperDom.style.animation = "";
      };

    const leave = () => {
        const cdWrapperDom = cdWrapperRef.current;
        if (!cdWrapperDom) {
            return;
        }
        cdWrapperDom.style.transition = "all 0.4s";
        const { x, y, scale } = _getPosAndScale();
        // 回到左下小圆位置
        cdWrapperDom.style[transform] = `translate3d(${-x}px, ${y}px, 0) scale(${scale})`;
    }

    const afterLeave = () => {
        const cdWrapperDom = cdWrapperRef.current;
        if (!cdWrapperDom) {
            return;
        }
        cdWrapperDom.style.transition = "";
        cdWrapperDom.style[transform] = "";
        // 若不置为 none 现在页面还是存在，只是透明了
        normalPlayerRef.current.style.display = "none";
    }

    // css可以用postcss的autoprefixer自动添加浏览器前缀
    // 但是在js中设置cdWrapperDom.style[transform]时不能自动转换，此处自己写函数加前缀
    const transform = prefixStyle("transform");
    

    // 获取两个圆心偏移，大圆放大倍数
    const _getPosAndScale = () => {
        const targetWidth = 40;
        const sLeft = 40;
        const sBottom = 30;
        const width = window.innerWidth * 0.8;
        // 80px border10px top10%
        const bTop = 80 + window.innerWidth * 0.1 + 10 + width / 2;

        const scale = targetWidth / width;
        const x = (window.innerWidth / 2 - sLeft);
        const y = window.innerHeight - bTop - sBottom;
        return { x, y, scale};
    }

    const handleBack = () => {
        toggleFullScreen(false);
    }

    return (
        <CSSTransition
            classNames="normal"
            in={fullScreen}
            timeout={400}
            mountOnEnter
            onEnter={enter}
            onEntered={afterEnter}
            onExit={leave}
            onExited={afterLeave}
        >
            <NormalPlayerContainer ref={normalPlayerRef}>
                <div className="background">
                    <img src={song.al.picUrl+"?param=300×300"} width="100%" height="100%" alt=""/>
                </div>
                <div className="background layer" />
                <Top className="top">
                    <div className="back" onClick={handleBack}>
                        <i className="iconfont icon-back" />
                    </div>
                    <h1 className="title">{ song.name }</h1>
                    <h1 className="subtitle">{ concactSingerName(song.ar) }</h1> 
                </Top>
                <Middle ref={cdWrapperRef}>
                    <CDWrapper>
                        <div className="cd">
                            <img className="image play" src={song.al.picUrl+"?param=400×400"} alt="" />
                        </div>
                    </CDWrapper>
                </Middle>
                <ProgressWrapper>
                    <span className="time time-l">0:00</span>
                        <div className="progress-bar-wrapper">
                            <ProgressBar percent={0.3}/>
                        </div>
                    <span className="time time-r">4:17</span>
                </ProgressWrapper>
                <Bottom className="bottom">
                    <Operators>
                        <div className="icon i-left">
                            <i className="iconfont icon-loop" />
                        </div>
                        <div className="icon i-left">
                            <i className="iconfont icon-last" />
                        </div>                  
                        <div className="icon i-center">
                            <i className="iconfont icon-play" />
                        </div>
                        <div className="icon i-right">
                            <i className="iconfont icon-next" />
                        </div>
                        <div className="icon i-right">
                            <i className="iconfont icon-playList" />
                        </div>
                    </Operators>
                </Bottom>
            </NormalPlayerContainer>
        </CSSTransition>
    )
}

export default React.memo(NormalPlayer);