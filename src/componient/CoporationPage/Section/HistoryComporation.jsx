import React, { useEffect } from 'react';
import '../../Style/HistoryCoporation.scss';
import { STATUS } from '../../../utils/constant';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';

const HistoryCoporation = React.memo((props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const itemData = props?.data?.item || {};
    const languageApp = useSelector((state) => state.language.language);

    const renderBlockLeft = (block) => {
        if (!block?.data) return null;

        switch (block.type) {
            case 'header':
                return (
                    <h3 className="title" key={block.id}>
                        {parse(block.data.text)}
                    </h3>
                );
            case 'paragraph':
                return (
                    <li className="my-1" key={block.id}>
                        {parse(block.data.text)}
                    </li>
                );
            case 'image':
                const imageUrlLeft = block.data?.file?.url ? `${backendUrl}${block.data.file.url}` : null;
                return imageUrlLeft ? (
                    <React.Fragment key={block?.id}>
                        <img
                            className="mt-2 mb-3"
                            key={block.id}
                            src={imageUrlLeft}
                            alt={block.data?.file?.title || 'Image'}
                        />
                        <p className="text-center">{parse(block?.data?.caption)}</p>
                    </React.Fragment>
                ) : null;
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

    const renderTranslations = (translations) => {
        return translations?.map((ele) => {
            if (ele.languages_code === languageApp) {
                return ele?.content?.blocks?.map((block) => (
                    <React.Fragment key={block.id}>{renderBlockLeft(block)}</React.Fragment>
                ));
            }
            return null;
        });
    };
    return (
        <>
            {itemData?.content && (
                <>
                    <div className="history-coporation-container d-lg-block d-none">
                        <div className="container">
                            {itemData?.translations?.map((ele, z) => {
                                if (ele.languages_code === languageApp) {
                                    return <h4 key={ele}>{ele?.title}</h4>;
                                }
                            })}
                            <div className="row justify-content-center mt-5 d-lg-flex d-none">
                                <ul>
                                    {itemData.content?.map((item, index) => {
                                        if (item?.status === STATUS.PUBLISH) {
                                            return (
                                                <li className="d-flex content" key={index}>
                                                    <div
                                                        style={{
                                                            borderRight:
                                                                index !== itemData.content.length - 1
                                                                    ? '2px solid #dae2fe'
                                                                    : 'none',
                                                            position: 'relative',
                                                            width: '50%',
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                width: '20px',
                                                                height: '20px',
                                                                backgroundColor: 'blue',
                                                                borderRadius: '50%',
                                                                position: 'absolute',
                                                                top: '-10px',
                                                                right: '-10px',
                                                            }}
                                                        ></div>
                                                        {index % 2 === 1 && (
                                                            <div className="child px-5 pe-5">
                                                                <ul className="text_end">
                                                                    {renderTranslations(item.translations)}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div style={{ width: '50%' }} className="child ps-3 pe-4">
                                                        {index % 2 === 0 && (
                                                            <ul className="text_start">
                                                                {renderTranslations(item.translations)}
                                                            </ul>
                                                        )}
                                                    </div>
                                                </li>
                                            );
                                        }
                                        return null;
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="history-coporation-container d-lg-none d-block">
                        <div className="container">
                            <h4>{itemData?.title}</h4>
                            <div className="row mt-5 d-lg-none d-flex left">
                                {itemData.content?.map((item, index) => {
                                    if (item?.status === STATUS.PUBLISH) {
                                        return <div key={index}>{renderTranslations(item.translations)}</div>;
                                    }
                                    return null;
                                })}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
});

export default HistoryCoporation;
