import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ListVideo from './Section/ListVideo';
import { useSelector, useDispatch } from 'react-redux';
import { STATUS, path } from '../../utils/constant';
const VideoGalleryPage = React.memo(() => {
    const dispatch = useDispatch();
    const { dataLibrary, loading, error } = useSelector((state) => state.dataLibrary);
    const languageApp = useSelector((state) => state.language.language);
    const [dataVideoGalleryPage, setDataVideoGalleryPage] = useState([]);
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);
    const TYPE_BLOCK = {
        block_videos_gallery: ListVideo,
    };

    useEffect(() => {
        if (dataLibrary?.data?.status === STATUS.PUBLISH) {
            const block = dataLibrary.data?.blocks;
            const blocksToUpdate = [];
            block?.map((item) => {
                if (item?.collection === 'block_videos_gallery') {
                    blocksToUpdate.push(item);
                }
            });
            setDataVideoGalleryPage(blocksToUpdate);
        }
    }, [dataLibrary, languageApp]);
    return (
        <>
            <Helmet>
                <title>{`Video Gallery - ${companyInfor?.data?.[0]?.company_name}`}</title>
                <meta
                    name="description"
                    content={`Explore the video gallery of ${companyInfor?.data?.[0]?.company_name} and discover our visual journey.`}
                />

                {/* open graph */}
                <meta property="og:title" content={`Video Gallery - ${companyInfor?.data?.[0]?.company_name}`} />
                <meta
                    property="og:description"
                    content={`Explore the video gallery of ${companyInfor?.data?.[0]?.company_name} and discover our visual journey.`}
                />
                <meta
                    property="og:image"
                    content={`${import.meta.env.VITE_URL_BACKEND}/assets/${companyInfor?.data?.[0]?.icon_logo}`}
                />
                <meta property="og:url" content={`${import.meta.env.VITE_URL_FRONTEND}${path.VIDEO_GALLERY}`} />
                <meta property="og:type" content="website" />
            </Helmet>
            {dataVideoGalleryPage.map((item, index) => {
                const BlockComponent = TYPE_BLOCK[item?.collection];
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
