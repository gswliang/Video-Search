import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div></div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc}
                    allow='accelerometer'
                    title={video.snippet.title}
                    allowFullScreen
                />
            </div>
            <div className='ui segment'>
                <h5 className="ui big header"> {video.snippet.title}</h5>
                <p style={{ fontSize: "1em" }}> {video.snippet.description}</p>
            </div>
        </div >)
}

export default VideoDetail;