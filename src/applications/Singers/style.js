import styled from 'styled-components';
import style from '../../assets/globalStyle';

export const NavContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    position: fixed;
    top: 95px;
    padding: 5px;
    overflow: hidden;
`

export const ListContainer = styled.div`
    position: fixed;
    top: 190px;
    left: 0;
    bottom: 0;
    overflow: hidden;
    width: 100%;
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    overflow: hidden;
`

export const ListItem = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    margin: 0 5px;
    padding: 5px 0;
    align-items: center;
    border-bottom: 1px solid ${style["border-color"]};
    .img_wrapper {
        margin-right: 20px;
        img {
        border-radius: 3px;
        width: 50px;
        height: 50px;
        }
    }
    .name {
        font-size: ${style["font-size-m"]};
        color: ${style["font-color-desc"]};
        font-weight: 500;
  }
`