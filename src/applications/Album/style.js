import styled from'styled-components';
import style from '../../assets/globalStyle';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: ${style["background-color"]};
  transform-origin: right bottom;
  &.fly-enter, &.fly-appear {
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
  &.fly-enter-active, &.fly-appear-active {
    transition: transform .3s;
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit {
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit-active {
    transition: transform .3s;
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
`

export const TopDesc = styled.div`
  height: 275px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px 20px;
  .background {
    background: url(${props => props.background}) no-repeat;
    height: 100%;
    width: 100%;
    background-size: 100% 100%; /* 设置背景！图！宽高，百分比相对于背景定位区域的百分比 */
    filter: blur(20px);  /* filter滤镜属性，blur属性给图像设置高斯属性，指屏幕上多少px像素融合在一起 */
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
  }
  .img_wrapper {
    height: 120px;
    width: 120px;
    position: relative;
    img {
      height: 120px;
      width: 120px;
      border-radius: 3px;
    }
    .play_count {
      position: absolute;
      top: 2px;
      right: 2px;
      color: ${style["font-color-light"]};
      font-size: ${style["font-size-s"]};
      .listen {
        font-size: ${style["font-size-s"]};
        margin-right: 2px;
      }
    }
  }
  .desc_wrapper {
    display: flex;
    flex: 1;
    padding-left: 10px;
    flex-direction: column;
    height: 120px;
    justify-content: space-around;
    .title {
      color: ${style["font-color-light"]};
      font-size: ${style["font-size-l"]};
      font-weight: 700; /* 粗细程度，400为normal，700为bold */
      line-height: 1.5;
    }
    .person {
      height: 20px;
      display: flex;
      .avatar {
        height: 20px;
        width: 20px;
        margin-right: 5px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .name {
        color: ${style["font-color-desc-v2"]};
        font-size: ${style["font-size-m"]};
        line-height: 20px;
      }
    }
  }

`

export const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  color: ${style["font-color-light"]};
  font-size:  ${style["font-size-s"]};
  margin-top: -65px;
  >div {
    display: flex;
    flex-direction: column;
    line-height: 22px;
    text-align: center;
    .iconfont {
      font-size: 20px;
    }
  }
  
`


export const SongList = styled.div`
  background: ${style["highlight-background-color"]};
  margin-top: 20px;
  border-radius: 5px 5px 0 0;
  .first_line {
    display: flex;
    justify-content: space-between;
    height: 50px;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid ${style["border-color"]};
    .play_all {
      font-size: 24px;
      margin-left: 10px;
      display: flex;
      align-items: center;
      .iconfont {
        font-size: 24px;
        margin-right: 10px;
      }
      .sum{
        font-size: ${style["font-size-s"]};
        color: ${style["font-color-desc-v2"]};
        margin-left: 5px;
      }
    }
    .add_list {
      display: flex;
      align-items: center;
      border-radius: 0 5px 0 0;
      background: ${style["theme-color"]};
      color: ${style["font-color-light"]};
      padding: 10px;
      .iconfont {
        margin-right: 5px;
      }
    }
  }
`

export const SongItem = styled.div`
  >li {
    height: 60px;
    display: flex;
    align-items: center;
    .index {
      text-align: center;
      width: 13%;
    }
    .info {
      display: flex;
      flex-direction: column;
      flex: 1;
      height: 100%;
      justify-content: space-between;
      border-bottom: 1px solid ${style["border-color"]};
      width: 87%;
      box-sizing: border-box;
      padding-right: 5px;
      >span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      >span:first-child {
        color: ${style["font-color-desc"]};
        margin-top: 10px;
      }
      >span:last-child {
        font-size: ${style["font-size-s"]};
        color: #bba8a8;
        margin-bottom: 10px;
      }
    }
  }
`