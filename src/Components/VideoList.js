import React from 'react';
import VideoItem from './VideoItems';

const VideoList = ({ videoSelect, videos }) => {
    const renderList = videos.map(video => {
        return <VideoItem key={video.id.videoId} videoSelect={videoSelect} video={video} />
    });

    return (
        <div className='ui middle aligned huge divided list'>{renderList}</div>
    );
}

export default VideoList;