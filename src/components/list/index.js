import React from 'react';
import LazyLoad from 'react-lazyload';
import { withRouter } from 'react-router-dom'; 
import {
    ListWrapper,
    ListItem,
    List
} from './style';
import { getCount } from '../../api/utils';

function RecommendList (props) {
    let enterDetail = (id) => {
        // params参数
        // 由于list组件是非路由组件，所以props不默认携带history等路由参数，因此需要用withRouter包裹本组件并export
        props.history.push(`/recommend/${id}`);
    }
    return (
        <ListWrapper>
            <h1 className='title'>推荐歌单</h1>
            <List>
                {
                    props.recommendList.map ((item, index) => {
                        return (
                           // {/* 关于循环的key再看看吧 */}
                            <ListItem key={item.id + item.picUrl} onClick={() => enterDetail(item.id)}>  
                                <div className="img_wrapper">
                                    {/*图片懒加载part1，视口内图片显示获得的资源，视口外显示占位图*/}
                                    {/* 若占位图不显示，src={require('./music.png').default} */}
                                    <LazyLoad placeholder={<img width='100%' height='100%' src={require('./music.png')} alt='music' />}>
                                        {/*加上param可减少请求的图片资源大小*/}
                                        <img src={item.picUrl + "?param=300×300"} width="100%" height="100%" alt="music"/>
                                    </LazyLoad>
                                    <div className="play_count">
                                        <span className="count">{ getCount(item.playCount) }</span>
                                    </div>
                                </div>
                                <div className="desc">{ item.name }</div>
                            </ListItem>
                        )
                    })
                }
            </List>
        </ListWrapper>
    )  
}
export default React.memo(withRouter(RecommendList));