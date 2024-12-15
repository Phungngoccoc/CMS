import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Project from './Section/Project';
import { useSelector, useDispatch } from 'react-redux';
import { STATUS } from '../../utils/constant';
// import '../../Style/ProjectPage.scss'
const ProjectPage = React.memo(() => {
    const dispatch = useDispatch();
    const { dataProject, loading, error } = useSelector((state) => state.dataProject);
    const languageApp = useSelector((state) => state.language.language);
    const [dataProjectPage, setDataProjectPage] = useState([]);

    const TYPE_BLOCK = {
        block_case_studies: Project,
    };
    const KEY_TYPE_BLOCK = Object.keys(TYPE_BLOCK);

    useEffect(() => {
        if (dataProject?.data?.status === STATUS.PUBLISH) {
            const translations = dataProject.data.translations;
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
            setDataProjectPage(blocksToUpdate);
        }
    }, [dataProject, languageApp]);
    return (
        <>
            <Helmet>
                <title>Project - CMC Global</title>
            </Helmet>
            {dataProjectPage.map((item, index) => {
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

export default ProjectPage;
