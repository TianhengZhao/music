import styled, {keyframes} from'styled-components';
import style from '../../../assets/globalStyle';

const rot = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const NormalPlayerContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 150;
    background: ${style["background-color"]};
    &.mini-enter {
        /* 向y轴正向移动该元素高度的100%，也就是向下移 */
        transform: translate3d(0, 100%, 0);
    }
    &.mini-enter-active {
        transform: translate3d(0, 0, 0);
        transition: all 0.4s;
    }
    &.mini-exit-active {
        transform: translate3d(0, 100%, 0);
        transition: all .4s
    }
    &.normal-enter {
        .top {
            transform: translate3d(0, -100px, 0);
        }
        .bottom {
            transform: translate3d(0, 100px, 0);
        }
    }
    &.normal-enter-active {
        .top,
        .bottom {
            transform: translate3d(0, 0, 0);
            transition: all .4s cubic-bezier(0.86, 0.18, 0.82, 1.32);
        }
        opacity: 1;
        transition: all .4s;       
    }
    &.normal-exit-done {
        opacity: 0;
    }
    .background {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
        opacity: .6;
        filter: blur(20px);
        /* &代表父选择器，所以下面等于 .background.layer  2个类选择器组合 不带空格 */
        &.layer {
            background: ${style["font-color-desc"]};
            opacity: 0.3;
            filter: none;
    }
}  
`

export const Top = styled.div`
    position: relative;
    .back {
        position: absolute;
        top: 0;
        left: 6px;
        .iconfont {
            display: block;
            font-size: 24px;
            padding: 9px;
            color: ${style["font-color-desc"]};
            font-weight: bold;
            /* 只转换由盒模型定位的元素 或 display:block */
            transform: rotate(90deg); 
        }
        
    }
    .title {
        width: 70%;
        margin: auto;
        line-height: 40px;
        text-align: center;
        font-size: ${style["font-size-l"]};
        color: ${style["font-color-desc"]};
        ${style.noWrap()};
    }
    .subtitle {
        line-height: 20px;
        text-align: center;
        font-size: ${style["font-size-m"]};
        color: ${style["font-color-desc-v2"]};
        ${style.noWrap()};
    }
`

export const Middle = styled.div`
    position: fixed;
    width: 100%;
    top: 80px;
    bottom: 170px;
    white-space: nowrap;
    font-size: 0;
    overflow: hidden;
`

export const Bottom = styled.div`
    position: absolute;
    bottom: 50px;
    width: 100%;
`

export const Operators = styled.div`
    display: flex;
    align-items: center;
    .icon {
        font-weight: 300;
        /* 用来做等分 */
        flex: 1;
        color: ${style["font-color-desc"]};
        &.disable {
            color: ${style["theme-color-shadow"]};
        }
        i {
            font-weight: 300;
            font-size: 30px;
        }
    }
    .i-left {
        text-align: right;
    }
    .i-center {
        padding: 0 20px;
        text-align: center;
        i {
            font-size: 40px;
        }
    }
    .i-right {
        text-align: left;
    }
    .icon-favorite {
        color: ${style["theme-color"]};
    }
`

export const CDWrapper = styled.div`
    position: absolute;
    margin: auto;
    top: 10%;
    left: 0;
    right: 0;
    width: 80%;
    box-sizing: border-box;
    height: 80vw;
    .cd {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        .image {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            border-radius: 50%;
            border: 10px solid rgba(255, 255, 255, 0.1);
        }
        .play {
            animation: ${rot} 20s linear infinite;
            &.pause {
                animation-play-state: paused;
            }
        }
    }
`
