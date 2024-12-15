import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import LastestNews from './Section/LastestNews';
import { useDispatch, useSelector } from 'react-redux';
import { STATUS } from '../../utils/constant';
// import '../../Style/NewsPage.scss'
const NewsPage = React.memo(() => {
    const dispatch = useDispatch();
    const { dataNews, loading, error } = useSelector((state) => state.dataNews);
    const languageApp = useSelector((state) => state.language.language);
    const [dataNewsPage, setDataNewsPage] = useState([]);

    const TYPE_BLOCK = {
        block_media: LastestNews,
    };
    const KEY_TYPE_BLOCK = Object.keys(TYPE_BLOCK);

    useEffect(() => {
        if (dataNews?.data?.status === STATUS.PUBLISH) {
            const translations = dataNews.data.translations;
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
            setDataNewsPage(blocksToUpdate);
        }
    }, [dataNews, languageApp]);
    // console.log(dataNews)
    return (
        <>
            <Helmet>
                <title>News - CMC Global</title>
            </Helmet>
            {dataNewsPage.map((item, index) => {
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

export default NewsPage;
