import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import LastestBlog from './Section/LastestBlog';
import ListBlog from './Section/ListBlog';
import { useSelector } from 'react-redux';
import { STATUS, path } from '../../utils/constant';
import { fetchTitleBlog } from '../../services/userServices';
const BlogPage = React.memo(() => {
    const { dataBlog } = useSelector((state) => state.dataBlog);
    const languageApp = useSelector((state) => state.language.language);
    const [title, setTitle] = useState(null);
    const [blocksLastestBlog, setBlocksLastestBlog] = useState([]);
    const [blocksListBlog, setBlocksListBlog] = useState([]);
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);
    useEffect(() => {
        if (dataBlog?.data?.length > 0) {
            const blogs = dataBlog?.data;
            const data = [];
            blogs?.map((item) => {
                if (item?.status === STATUS.PUBLISH) {
                    data.push(item);
                }
            });

            const latestBlogs = data.slice(0, 4);
            const listBlogs = data.slice(4);

            setBlocksLastestBlog(latestBlogs);
            setBlocksListBlog(listBlogs);
        }
    }, [dataBlog, languageApp]);
    useEffect(() => {
        const fetchTitle = async () => {
            try {
                const res = await fetchTitleBlog();
                if (res?.status < 400) {
                    const dataTitle = res.data?.data;
                    dataTitle.map((ele) => {
                        if (ele?.status === STATUS.PUBLISH) {
                            setTitle(ele?.title);
                        }
                    });
                }
            } catch (error) {
                if (import.meta.env.VITE_ENVIRONMENT === 'DEVELOPMENT') {
                    console.error(error.message);
                }
            }
        };
        fetchTitle();
    }, []);
    return (
        <>
            <Helmet>
                <title>{`Blog - ${companyInfor?.data?.[0]?.company_name}`}</title>
                <meta
                    name="description"
                    content={`Explore the latest blogs and updates from ${companyInfor?.data?.[0]?.company_name}.`}
                />
                <meta property="og:title" content={`Blog - ${companyInfor?.data?.[0]?.company_name}`} />
                <meta
                    property="og:description"
                    content={`Explore the latest blogs and updates from ${companyInfor?.data?.[0]?.company_name}.`}
                />
                <meta
                    property="og:image"
                    content={`${import.meta.env.VITE_URL_BACKEND}/assets/${companyInfor?.data?.[0]?.icon_logo}`}
                />
                <meta property="og:url" content={`${import.meta.env.VITE_URL_FRONTEND}${path.BLOG}`} />
                <meta property="og:type" content="website" />
            </Helmet>
            <LastestBlog blogs={blocksLastestBlog} title={title} />
            <ListBlog blogs={blocksListBlog} />
        </>
    );
});

export default BlogPage;
