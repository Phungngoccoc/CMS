import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ListPhoto from './Section/ListPhoto';
import { useSelector, useDispatch } from 'react-redux';
import { STATUS, path } from '../../utils/constant';
const PhotoGalleryPage = React.memo(() => {
    const { dataLibrary } = useSelector((state) => state.dataLibrary);
    const languageApp = useSelector((state) => state.language.language);
    const [dataPhotoGalleryPage, setDataPhotoGalleryPage] = useState([]);
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);
    const TYPE_BLOCK = {
        block_photos_gallery: ListPhoto,
    };

    useEffect(() => {
        if (dataLibrary?.data?.status === STATUS.PUBLISH) {
            const block = dataLibrary.data?.blocks;
            const blocksToUpdate = [];
            block?.map((item) => {
                if (item?.collection === 'block_photos_gallery') {
                    blocksToUpdate.push(item);
                }
            });
            setDataPhotoGalleryPage(blocksToUpdate);
        }
    }, [dataLibrary, languageApp]);
    return (
        <>
            <Helmet>
                <title>{`Picture Gallery - ${companyInfor?.data?.[0]?.company_name}`}</title>
                <meta
                    name="description"
                    content={`Explore the picture gallery of ${companyInfor?.data?.[0]?.company_name} and discover our visual journey.`}
                />

                {/* open graph */}
                <meta property="og:title" content={`Picture Gallery - ${companyInfor?.data?.[0]?.company_name}`} />
                <meta
                    property="og:description"
                    content={`Explore the picture gallery of ${companyInfor?.data?.[0]?.company_name} and discover our visual journey.`}
                />
                <meta
                    property="og:image"
                    content={`${import.meta.env.VITE_URL_BACKEND}/assets/${companyInfor?.data?.[0]?.icon_logo}`}
                />
                <meta property="og:url" content={`${import.meta.env.VITE_URL_FRONTEND}${path.PHOTO_GALLERY}`} />
                <meta property="og:type" content="website" />
            </Helmet>
            {dataPhotoGalleryPage.map((item, index) => {
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

export default PhotoGalleryPage;
