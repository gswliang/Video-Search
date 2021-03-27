import './VideoItems.css';
import React from 'react';

//key='video.id.videoId'
const VideoItem = ({ videoSelect, video }) => {
    //只要有人click 包在外面的div，就會將video Pass給videoSelect (從App來的callBack)
    //需要以function的方式回傳，不然會全部的影片傳回去！！
    return <div onClick={() => videoSelect(video)} className='video-item item'>
        <img className="ui image"
            alt={video.snippet.channelTitle}
            src={video.snippet.thumbnails.medium.url} />
        <div className="content">
            <div style={{ fontSize: "15px" }}>{video.snippet.title}</div>
        </div>
    </ div >
}

export default VideoItem;