import React, { useRef } from "react";
import { concactSingerName } from "../../../api/utils";
import { MiniPlayerContainer } from "./style";
import { CSSTransition } from 'react-transition-group';
import progressCircle from "../../../baseUI/progress-circle";
import ProgressCircle from "../../../baseUI/progress-circle";


function MiniPlayer(props) {
    const { 
        song, 
        fullScreen, 
        playing,
        percent,
        clickPlaying,
        toggleFullScreen 
    } = props;
    const miniPlayerRef = useRef();
    
    return (
        <CSSTransition 
            in={!fullScreen} 
            timeout={400} 
            classNames="mini" 
            onEnter={() => miniPlayerRef.current.style.display = "flex"}
            onExited={() => miniPlayerRef.current.style.display = "none"}
        >
            <MiniPlayerContainer ref={miniPlayerRef} onClick={() => toggleFullScreen(true)}>
                <div className="icon">
                    <div className="imgWrapper">
                        <img className={`play ${playing ? "": "pause"}`} src={song.al.picUrl} width="40" height="40" alt="img" />
                    </div>
                </div>
                <div className="text">
                    <h2 className="name">{song.name}</h2>
                    <p className="desc">{concactSingerName(song.ar)}</p>
                </div>
                <div className="control">
                    <ProgressCircle radius={32} percent={percent}>
                        {
                            playing ? 
                            <i className="iconfont icon-play icon-mini" onClick={e => clickPlaying(e, false)}/>
                                :
                            <i className="iconfont icon-pause icon-mini" onClick={e => clickPlaying(e, true)}/>
                        }
                    </ProgressCircle>
                </div>
                <div className="control">
                    <i className="iconfont icon-playList" />
                </div>
            </MiniPlayerContainer>
        </CSSTransition>
    )
}

export default React.memo(MiniPlayer);

