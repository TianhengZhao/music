import styled, {keyframes} from'styled-components';
import style from '../../../assets/globalStyle';

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const MiniPlayerContainer = styled.div`
    height: 60px;
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    align-items: center;
    z-index: 200;
    background: ${style["highlight-background-color"]};
    &.mini-enter {
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
    .icon {
        width: 40px;
        height: 40px;
        padding: 0 10px 0 20px;
        .imgWrapper {
            width: 100%;
            height: 100%;
            img {
                border-radius: 50%;
                &.play {
                    animation: ${rotate} 10s infinite;
                    &.pause {
                        animation-play-state: paused;
                    }
                }
            }
        }
    }
    .text {
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        line-height: 20px;
        flex: 1;
        overflow: hidden;
        .name {
            font-size: ${style["font-size-m"]};
            color: ${style["font-color-desc"]};
            ${style.noWrap()}
        }
        .desc {
            font-size: ${style["font-size-s"]};
            color: ${style["font-color-desc-v2"]};
            ${style.noWrap()}
        }
    }
    .control {
        padding: 0 10px;
        color: ${style["theme-color"]};
        .iconfont {
            font-size: 30px;
        }
    }
`;