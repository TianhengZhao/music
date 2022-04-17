import React, { memo, useRef, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import Scroll from '../../components/scroll';
import styled from 'styled-components';
import style from '../../assets/globalStyle';

const List = styled.div`
    display: inline-flex;
    height: 30px;
    align-items: center;
    >span:first-of-type {
        display: block;
        flex: 0 0 auto;
        padding: 5px;
        margin-right: 5px;
        color: grey;
        font-size: ${style["font-size-m"]};
    }
`

const ListItem = styled.span`
    flex: 0 0 auto;
    font-size: ${style["font-size-m"]};
    padding: 5px 8px;
    border-radius: 10px;
    &.selected{
        color: ${style["theme-color"]};
        border: 1px solid ${style["theme-color"]};
        opacity: 0.8;
    }
`

function Horizon(props) {
    const { list, oldVal, title } = props;
    const { handleClick } = props;
    const Category = useRef(null);

    useEffect(() => {
        // 给scroll的div设置宽度，使滚动生效
        let categoryDOM = Category.current;
        let eles = categoryDOM.querySelectorAll("span");
        let totalWidth = 0;
        Array.from(eles).forEach(item => {
            totalWidth += item.offsetWidth;
        })
        categoryDOM.style.width = `${totalWidth}px`;
    }, []);

    return (
        <Scroll direction={"horizental"}>
            <div ref={Category}>
                <List>
                    <span>{title}</span>
                    {
                        list.map(item => {
                            return (
                                <ListItem
                                    key={item.key}
                                    className={`${oldVal === item.key ? 'selected' : ''}`}
                                    onClick={() => handleClick(item.key)}
                                >
                                    {item.name}
                                </ListItem>
                            )
                        })
                    }
                </List>
            </div>
        </Scroll>
    )
}

Horizon.defaultProps = {
    list: [], // 列表数据
    oldVal: '', // 当前item值
    title: '', // 列表左侧灰色标题
    handleClick: null // 点击不同item执行的方法
};

Horizon.propTypes = {
    list: PropTypes.array,
    oldVal: PropTypes.string,
    title: PropTypes.string,
    handleClick: PropTypes.func
};

export default memo(Horizon);