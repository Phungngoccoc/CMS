import React, { useState } from "react";
import '../../Style/VideoIntroduction.scss';
import ReactPlayer from 'react-player';
import Video from "../../../assets/video/Introduce.mp4";

const VideoIntroduction = (props) => {
    const [playing, setPlaying] = useState(true);
    const [mute, setMute] = useState(true);

    return (
        <div className="position-relative video-introduce " >
            <div>
                <ReactPlayer
                    url={Video}
                    playing={playing}
                    loop={true}
                    controls={false}
                    volume={1}
                    muted={mute}
                    width="100%"
                    height="100%"
                />
            </div>
            <div className="position-absolute btn-play">
                <button onClick={() => setPlaying(!playing)}>
                    <i className={`fa ${playing ? "fa-pause" : "fa-play"}`}></i>
                </button>

                <button onClick={() => setMute(!mute)}>
                    <i className={`fa ${mute ? "fa-volume-off" : "fa-volume-up"}`}></i>
                </button>
            </div>
        </div>
    );
};

export default VideoIntroduction;
