import React, { useState, useEffect } from 'react';
import '../../Style/Solution.scss';
import arrow from '../../../assets/image/arrow-right.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { path } from '../../../utils/constant';
import AOS from 'aos';
import 'aos/dist/aos.css';
import parse from 'html-react-parser';
const Solution = React.memo((props) => {
    const navigate = useNavigate();
    const languageApp = useSelector((state) => state.language.language);
    const [dataSolution, setDataSolution] = useState(null);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [title, setTitle] = useState('');
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);
    useEffect(() => {
        if (props?.data) {
            setDataSolution(props.data.ele);
            setTitle(props.data.ele.title);
        }
    }, [languageApp]);

    const SwitchPage = (path) => {
        navigate(path);
    };
    useEffect(() => {
        AOS.init({
            duration: 1200,
            offset: 200,
            easing: 'ease-in-out',
            once: false,
        });
    }, []);
    const viewState = () => {};

    const renderBlockRight = (block) => {
        switch (block.type) {
            case 'header':
                return <h5 key={block.id}>{parse(block.data.text)}</h5>;
            case 'paragraph':
                return <p key={block.id}>{parse(block.data.text)}</p>;
            case 'image':
                const imageUrl = `${backendUrl}${block.data.file.url}`;
                return imageUrl ? (
                    <React.Fragment key={block?.id}>
                        <img key={block.id} src={imageUrl} alt={block.data.file?.title || 'Image'} />
                        <div className="text-center">
                            <span>{parse(block?.data?.caption)}</span>
                        </div>
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
    const renderBlockLeft = (block) => {
        if (block?.data === null || block?.data === undefined) return null;

        switch (block.type) {
            case 'header':
                return (
                    <h2 style={{ color: `${companyInfor?.data[0]?.color_text_heading}` }} key={block.id}>
                        {parse(block.data.text)}
                    </h2>
                );
            case 'paragraph':
                return <p key={block.id}>{parse(block.data.text)}</p>;
            case 'image':
                const imageUrlLeft = `${backendUrl}${block.data.file.url}`;
                return (
                    <React.Fragment key={block?.id}>
                        <img key={block.id} src={imageUrlLeft} alt={block.data.file?.title || 'Image'} />
                        <p className="text-center">{parse(block?.data?.caption)}</p>
                    </React.Fragment>
                );
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
        dataSolution?.left_solution?.blocks?.length > 0 && (
            <div className="section-solution" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12 left" data-aos="fade-right">
                            <h4 onClick={viewState}>{title}</h4>
                            {dataSolution?.left_solution?.blocks?.map(renderBlockLeft)}
                            <span className="button" onClick={() => SwitchPage(path.CONTACT_US)}>
                                {languageApp === 'vi' ? 'Liên hệ với chúng tôi' : 'Contact Us'}
                                <img src={arrow} className="ms-2" alt="arrow" />
                            </span>
                        </div>
                        {dataSolution?.left_solution?.blocks?.length > 0 && (
                            <div className="col-md-6 col-12 right" data-aos="fade-left">
                                {dataSolution?.right_solution?.blocks?.map(renderBlockRight)}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    );
});

export default Solution;
