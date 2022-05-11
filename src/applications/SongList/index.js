import React from 'react';
import { SongList, SongItem } from "./style";
import { concactSingerName } from '../../api/utils';

const SongsList = React.forwardRef ((props, refs)=> {

  const { collectCount, showCollect, songs } = props;

  const totalCount = songs.length;

  const selectItem = (e, index) => {
    console.log (index);
  }

  let songList = (list) => {
    let res = [];
    for (let i = 0; i < list.length; i++) {
      let item = list[i];
      res.push(
        <li key={item.id} onClick={e => selectItem(e, i)}>
          <span className="index">{i + 1}</span>
          <div className="info">
            <span>{item.name}</span>
            <span>
              { item.ar ? concactSingerName(item.ar): concactSingerName(item.artists) } - { item.al ? item.al.name : item.album.name}
            </span>
          </div>
        </li>
      )
    }
    // 返回数组
    return res;
  };

  const collect = (count) => {
    return  (
      <div className="add_list">
        <i className='iconfont icon-collect' />
        收藏({Math.floor(count/1000)/10}万)
      </div>
    )
  };
  return (
    <SongList ref={refs} showBackground={props.showBackground}>
      <div className="first_line">
        <div className="play_all" onClick={(e) => selectItem(e, 0)}>
          <i className='iconfont icon-play' />
          <span>播放全部</span>
          <span className='sum'>(共{totalCount}首)</span>
        </div>
        { showCollect ? collect(collectCount) : null}
      </div>
      <SongItem>
        { songList(songs) }
      </SongItem>
    </SongList>
  )
});

export default React.memo(SongsList);