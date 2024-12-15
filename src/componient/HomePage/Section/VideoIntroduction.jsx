import React, { useState, useEffect } from 'react';
import '../../Style/VideoIntroduction.scss';
import ReactPlayer from 'react-player';

const VideoIntroduction = React.memo((props) => {
    const [playing, setPlaying] = useState(true);
    const [mute, setMute] = useState(true);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        if (props?.url_video) {
            setUrl(`${import.meta.env.VITE_BACKEND_URL}/assets/${props.url_video}`);
        }
    }, [props]);

    return (
        <div className="position-relative video-introduce">
            {url && (
                <div>
                    <ReactPlayer
                        url={url}
                        playing={playing}
                        loop={true}
                        controls={false}
                        volume={mute ? 0 : 1}
                        muted={mute}
                        width="100%"
                        height="100%"
                    />
                </div>
            )}
            <div className="position-absolute btn-play">
                <button onClick={() => setPlaying(!playing)}>
                    <i className={`fa ${playing ? 'fa-pause' : 'fa-play'}`}></i>
                </button>

                <button onClick={() => setMute(!mute)}>
                    <i className={`fa ${mute ? 'fa-volume-off' : 'fa-volume-up'}`}></i>
                </button>
            </div>
        </div>
    );
});

export default VideoIntroduction;
