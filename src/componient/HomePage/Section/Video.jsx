import React, { useState, useEffect, useRef } from 'react';
import '../../Style/VideoIntroduction.scss';
import { useDispatch } from 'react-redux';
import { isShowVideo } from '../../../features/isShowVideoSlice';
const Video = React.memo((props) => {
    const [playing, setPlaying] = useState(true);
    const [mute, setMute] = useState(true);
    const [url, setUrl] = useState(null);
    const dispatch = useDispatch();
    const videoRef = useRef(null);

    useEffect(() => {
        if (props?.url_video) {
            setUrl(`${import.meta.env.VITE_BACKEND_URL}/assets/${props.url_video}`);
        }
    }, [props]);

    const togglePlaying = () => {
        if (playing) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setPlaying(!playing);
    };

    const toggleMute = () => {
        setMute(!mute);
        videoRef.current.muted = !mute;
    };

    const handleChangeState = () => {
        dispatch(isShowVideo(true));
    };

    return (
        <div className="child-video p-0 m-0 position-relative">
            <video
                ref={videoRef}
                src={url}
                autoPlay
                muted={mute}
                playsInline
                controls={false}
                loop
                onCanPlay={handleChangeState}
                onError={handleChangeState}
            />
            <div className="position-absolute btn-play">
                <button onClick={togglePlaying}>
                    <i className={`fa ${playing ? 'fa-pause' : 'fa-play'}`}></i>
                </button>

                <button onClick={toggleMute}>
                    <i className={`fa ${mute ? 'fa-volume-off' : 'fa-volume-up'}`}></i>
                </button>
            </div>
        </div>
    );
});

export default Video;
