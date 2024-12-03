import React from "react";
import '../../Style/VideoIntroduction.scss';
import ReactPlayer from 'react-player'
import Video from "../../../assets/video/Introduce.mp4"
const VideoIntroduction = (props) => {
    return (
        <div>
            <ReactPlayer url="https://www.youtube.com/watch?v=MajKfIFfGLk&list=PLncHg6Kn2JT7QbvdNNAmQZLqWchnJEoH5&index=26"
                playing={false}
            />
        </div>
    );
};

export default VideoIntroduction;
