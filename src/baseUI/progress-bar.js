import React, { useRef, useState } from "react";
import styled from'styled-components';
import style from '../assets/globalStyle';
import {prefixStyle} from "../api/utils";

const ProgressBarWrapper = styled.div`
    height: 30px;
    .bar-inner {
        background: rgba(0, 0, 0, .3);
        height: 4px;
        position: relative;
        top: 13px;
        .progress {
            position: absolute;
            left: 0;
            height: 100%;
            background: ${style["theme-color"]};
        }
        .progress-btn-wrapper {
            width: 30px;
            height: 30px;
            position: absolute;
            top: -13px;
            left: -15px;
            .progress-btn {
                position: relative;
                top: 7px;
                left: 7px;
                box-sizing: border-box;
                width: 16px;
                height: 16px;
                border: 3px solid ${style["border-color"]};
                border-radius: 50%;
                background: ${style["theme-color"]};
            }
        }
    }
`

export default function ProgressBar(props) {
    const {percentChange} = props;

    const progressBar = useRef();
    const progress = useRef();
    const progressBtn = useRef();
    const [touch, setTouch] = useState({});

    const progressBtnWidth = 8;

    // 给进度条和btn设置偏移样式
    const _offset = (offsetWidth) => {
        // 进度
        progress.current.style.width = `${offsetWidth}px`;
        // btn左右移
        progressBtn.current.style.transform = `translate3d(${offsetWidth}px, 0, 0)`;
    }

    // 根据进度条现状改变比例
    const _changePercent = () => {
        const barWidth = progressBar.current.clientWidth - progressBtnWidth;
        const curPercent = progress.current.clientWidth / barWidth;
       // percentChange(curPercent);
    }

    const progressTouchStart = (e) => {
        const startTouch = {};
        // 滑动开始了
        startTouch.initiated = true;
        // 滑动的初始横坐标（不为0，是相对于页面的横坐标）
        startTouch.startX = e.touches[0].pageX;
        // 进度条progress当前长度
        startTouch.left = progress.current.clientWidth;
        setTouch(startTouch);
    }

    const progressClick = (e) => {
        // 获取元素上下左右相对浏览器窗口的位置
        const rectObj = progressBar.current.getBoundingClientRect();
        const offsetWidth = e.pageX - rectObj.left;
        _offset(offsetWidth);
        _changePercent();
    }

    // 滑动过程中，实时设置当前进度条进度
    const progressTouchMove = (e) => {
        if (!touch.initiated) {
            return;
        }
        // 进度条移动的长度
        const deltaX = e.touches[0].pageX - touch.startX;
        const barWidth = progressBar.current.clientWidth - progressBtnWidth;
        // 进度条当前长度，min防止向右移出总长度，max防止向左移出
        const offsetWidth = Math.min(Math.max(0, touch.left + deltaX), barWidth);
        _offset(offsetWidth);
    }

    const progressTouchEnd = (e) => {
        // deepclone
        const endTouch = JSON.parse(JSON.stringify(touch));
        endTouch.initiated = false;
        setTouch(endTouch);
        _changePercent();
    }

    return (
        <ProgressBarWrapper>
            <div className="bar-inner" ref={progressBar} onClick={progressClick}>
                <div className="progress" ref={progress}/>
                <div className="progress-btn-wrapper" 
                     ref={progressBtn}
                     onTouchStart={progressTouchStart}
                     onTouchMove={progressTouchMove}
                     onTouchEnd={progressTouchEnd}
                >
                    <div className="progress-btn" />
                </div>
            </div>
        </ProgressBarWrapper>
    )
}