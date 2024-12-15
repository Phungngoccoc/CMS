import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ListVideo from './Section/ListVideo';
import { useSelector, useDispatch } from 'react-redux';
import { STATUS } from '../../utils/constant';
const VideoGalleryPage = React.memo(() => {
    const dispatch = useDispatch();
    const { dataLibrary, loading, error } = useSelector((state) => state.dataLibrary);
    const languageApp = useSelector((state) => state.language.language);
    const [dataVideoGalleryPage, setDataVideoGalleryPage] = useState([]);

    const TYPE_BLOCK = {
        block_video_Gallery: ListVideo,
    };
    const KEY_TYPE_BLOCK = Object.keys(TYPE_BLOCK);

    useEffect(() => {
        if (dataLibrary?.data?.status === STATUS.PUBLISH) {
            const translations = dataLibrary.data.translations;
            const blocksToUpdate = [];
            translations.forEach((translation) => {
                if (translation.languages_code === languageApp) {
                    translation.blocks.forEach((block) => {
                        if (KEY_TYPE_BLOCK.includes(block.collection)) {
                            if (block.item?.status === STATUS.PUBLISH) {
                                blocksToUpdate.push(block);
                            }
                        }
                    });
                }
            });
            setDataVideoGalleryPage(blocksToUpdate);
        }
    }, [dataLibrary, languageApp]);
    return (
        <>
            <Helmet>
                <title>Video Gallery - CMC Global</title>
            </Helmet>
            {dataVideoGalleryPage.map((item, index) => {
                const BlockComponent = TYPE_BLOCK[item.collection];
                return BlockComponent ? (
                    <div key={index}>
                        <BlockComponent data={item} />
                    </div>
                ) : null;
            })}
        </>
    );
});

export default VideoGalleryPage;
