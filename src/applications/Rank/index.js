import React, { useEffect } from "react";
import { connect } from "react-redux";
import Scroll from "../../components/scroll";
import { filterRankList } from "../../api/utils";
import { getRankList } from "./store";
import { 
    Container,
    ListItem,
    List,
    SongList
 } from "./style";
 import Loading from "../../baseUI/loading";
import { renderRoutes } from 'react-router-config';

function Rank(props) {
    const { rankList: listImm, loading, dispatchRankList } = props;
    let list = listImm.toJS();

    let enterDetail = (id) => {
        console.log(id)
        props.history.push(`/rank/${id}`);
    }

    useEffect(() => {
        if (!list.length) {
            dispatchRankList();
        }
    }, []);

    const renderRankList = (list, isGlobal = false) => {
        return (
            <List isGlobal={isGlobal}>
                {
                    list.map(item => {
                        // list每一项都return() 
                        return (
                            <ListItem 
                                key={item.coverImgId+item.name}
                                length={item.tracks.length}
                                onClick={() => enterDetail(item.id)}
                            >
                                <div className="img_wrapper">
                                    <img src={item.coverImgUrl} alt=""/>
                                    <div className="decorate" />
                                    <span className="update_frequecy">{item.updateFrequency}</span>
                                </div>
                                { renderSongList(item.tracks) }
                            </ListItem>
                        )
                    })
                }
            </List>
        )
    }

    const renderSongList = list => {
        return list.length ? (
            <SongList>
                {
                    list.map((item, index) => {
                        return <li key={index}>{index+1}. {item.first} - {item.second}</li>
                    })
                }
            </SongList>
        ) : null
    }

    const globalStartIdx = filterRankList(list);
    const officialList = [...list.slice(0, globalStartIdx)];
    const globalList = [...list.slice(globalStartIdx)];
    let displayStyle = loading ? {"display":"none"}:  {"display": ""};

    return (
        <Container>
            <Scroll>
                <div>
                    {/* 官方榜和全球榜用一套render代码，根据参数区分样式，很妙 */}
                    <h1 className="offical" style={displayStyle}>官方榜</h1>
                        { renderRankList(officialList) }
                    <h1 className="global" style={displayStyle}>全球榜</h1>
                        { renderRankList(globalList, true) }
                    { loading ? <Loading></Loading> : null }
                </div>
            </Scroll>  
            { renderRoutes(props.route.routes) } 
        </Container>   
    )
}

const mapStateToProps = (state) => ({
    rankList: state.getIn(['rank', 'rankList']),
    loading: state.getIn(['rank', 'loading'])
});

const mapDispatchToProps = (dispatch) => ({
    dispatchRankList() {
        dispatch(getRankList());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Rank));