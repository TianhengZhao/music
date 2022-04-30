import styled from'styled-components';
import style from '../../assets/globalStyle';

export const SongList = styled.div`
  background: ${style["highlight-background-color"]};
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