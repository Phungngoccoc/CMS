import React from 'react';
import '../../Style/GeneralIntroduction.scss';
import parse from 'html-react-parser';
import { STATUS } from '../../../utils/constant';
import { useSelector } from 'react-redux';

const GeneralIntroduction = React.memo((props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const languageApp = useSelector((state) => state.language.language);
    const renderBlockLeft = (block) => {
        if (block?.data === null || block?.data === undefined) return null;

        switch (block.type) {
            case 'header':
                switch (block?.data?.level) {
                    case 1:
                        return (
                            <h1 className="title mb-1 mt-4 header-title" key={block.id}>
                                {parse(block.data.text)}
                            </h1>
                        );
                    case 2:
                        return (
                            <h2 className="title mb-1 mt-4 header-title" key={block.id}>
                                {parse(block.data.text)}
                            </h2>
                        );
                    case 3:
                        return (
                            <h3 className="title mb-1 mt-4 header-title" key={block.id}>
                                {parse(block.data.text)}
                            </h3>
                        );
                    case 4:
                        return (
                            <h4 className="title mb-1 mt-4 header-title" key={block.id}>
                                {parse(block.data.text)}
                            </h4>
                        );
                    case 5:
                        return (
                            <h5 className="title mb-1 mt-4 header-title" key={block.id}>
                                {parse(block.data.text)}
                            </h5>
                        );
                    case 6:
                        return (
                            <h6 className="title mb-1 mt-4 header-title" key={block.id}>
                                {parse(block.data.text)}
                            </h6>
                        );
                    default:
                        return null;
                }
            case 'paragraph':
                return (
                    <p className="my-1" key={block.id}>
                        {parse(block.data.text)}
                    </p>
                );
            case 'image':
                const imageUrlLeft = `${backendUrl}${block.data.file.url}`;
                return imageUrlLeft ? (
                    <React.Fragment key={block?.id}>
                        <img
                            className="mt-2 mb-3"
                            key={block.id}
                            src={imageUrlLeft}
                            alt={block.data.file?.title || 'Image'}
                        />
                        <p className="text-center">{parse(block?.data?.caption)}</p>
                    </React.Fragment>
                ) : null;
            case 'attaches':
                if (block?.data?.file?.extension === 'mp4') {
                    return (
                        <video
                            className="video-page my-3"
                            src={`${backendUrl}${block.data.file.url}`}
                            controls={true}
                            autoPlay={true}
                            playsInline
                            loop
                            muted={true}
                        />
                    );
                } else if (block?.data?.file?.extension === 'svg') {
                    return null;
                } else {
                    return (
                        <>
                            <a href={`${backendUrl}${block.data.file.url}`} target="_blank">
                                {languageApp === LANGUAGES.EN ? 'Click to view' : 'Nhấn để xem'}
                            </a>
                        </>
                    );
                }
            case 'raw':
                return <div dangerouslySetInnerHTML={{ __html: block?.data?.html }} className="video_nhung"></div>;
            case 'nestedlist':
                if (block?.data?.style === 'unordered') {
                    return (
                        <ul className="mt-3">
                            {block.data?.items?.map((ele, z) => {
                                return <li key={z}>{ele?.content}</li>;
                            })}
                        </ul>
                    );
                } else if (block?.data?.style === 'ordered') {
                    return (
                        <ol className="mt-3">
                            {block.data?.items?.map((ele, z) => {
                                return <li key={z}>{ele?.content}</li>;
                            })}
                        </ol>
                    );
                }
            default:
                return null;
        }
    };

    return (
        <>
            {props?.data?.item?.status === STATUS.PUBLISH && (
                <div className="general-introduction-container">
                    <div className="container">
                        {props.data.item?.translations?.map((ele, index) => {
                            if (ele?.languages_code === languageApp) {
                                return (
                                    <React.Fragment key={index}>
                                        <h4>{ele?.title}</h4>
                                        <div className="mt-4 ">
                                            {ele?.content?.blocks?.map((block) => renderBlockLeft(block))}
                                        </div>
                                    </React.Fragment>
                                );
                            }
                        })}
                    </div>
                </div>
            )}
        </>
    );
});

export default GeneralIntroduction;
