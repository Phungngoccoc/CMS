import React, { useState, useEffect } from 'react';
import '../../Style/ListPhoto.scss';
import { useSelector } from 'react-redux';
import { LANGUAGES, STATUS, path } from '../../../utils/constant';
import { Modal } from 'reactstrap';
import { useNavigate } from 'react-router';
import parse from 'html-react-parser';
import { fetchDataPhoto } from '../../../services/userServices';
import ReactPaginate from 'react-paginate';
const ListPhoto = React.memo((props) => {
    const languageApp = useSelector((state) => state.language.language);
    const navigate = useNavigate();
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);
    const SwitchPage = (id) => {
        navigate(`${path.PHOTO_GALLERY}/${encodeURIComponent(id)}`);
    };
    const [photos, setPhotos] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(6);
    const renderBlock = (blocks) => {
        if (!blocks || blocks.length === 0) return null;

        const groupedBlocks = blocks.reduce((result, block, index) => {
            if (index % 2 === 0) result.push([block]);
            else result[result.length - 1].push(block);
            return result;
        }, []);

        return groupedBlocks.map((group, groupIndex) => (
            <tr key={groupIndex}>
                {group.map((block, index) => {
                    switch (block.type) {
                        case 'header':
                            return (
                                <td key={index} style={{ verticalAlign: 'top' }}>
                                    <h2>{parse(block.data.text)}</h2>
                                </td>
                            );
                        case 'paragraph':
                            return (
                                <td
                                    key={index}
                                    style={{
                                        verticalAlign: 'top',
                                        paddingRight: '10px',
                                        width: index % 2 === 0 ? '30%' : 'auto',
                                    }}
                                >
                                    <p>{parse(block.data.text)}</p>
                                </td>
                            );
                        case 'image':
                            const imageUrl = `${backendUrl}${block.data.file.url}`;
                            return (
                                <td key={index} style={{ verticalAlign: 'top' }}>
                                    <img src={imageUrl} alt={block.data.file?.title || 'Image'} />
                                    <p className="text-center">{parse(block?.data?.caption)}</p>
                                </td>
                            );
                        case 'raw':
                            return (
                                <div
                                    dangerouslySetInnerHTML={{ __html: block?.data?.html }}
                                    className="video_nhung"
                                ></div>
                            );
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
                })}
            </tr>
        ));
    };

    const fetchPhotos = async (page = 0) => {
        const offset = page * itemsPerPage;
        const res = await fetchDataPhoto(itemsPerPage, offset);
        if (res.status < 400) {
            setPhotos(res.data.data);
            setPageCount(Math.ceil(res.data?.meta?.total_count / itemsPerPage));
        }
    };
    useEffect(() => {
        fetchPhotos(currentPage);
    }, [currentPage]);
    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
        window.scrollTo(0, 0);
    };
    return (
        <>
            {props?.data?.item?.status === STATUS.PUBLISH && (
                <div className="photo-gallery-container">
                    <div className="container">
                        <div className="d-flex flex-sm-row flex-column justify-content-between mb-5">
                            {props.data.item?.translations?.map((item, index) => {
                                if (item?.languages_code === languageApp) {
                                    return (
                                        <h4 key={index} className="mb-sm-0 mb-4">
                                            {item?.title}
                                        </h4>
                                    );
                                }
                            })}
                        </div>
                        <div className="row">
                            {photos?.length > 0 &&
                                photos?.map(
                                    (ele, index) =>
                                        ele?.status === STATUS.PUBLISH && (
                                            <div
                                                className="col-12 mb-4 row mt-3 pb-4"
                                                key={index}
                                                style={{ borderBottom: '1px solid #ccc' }}
                                            >
                                                <div className="col-md-7 col-12">
                                                    {ele?.translations?.map((item, z) => {
                                                        if (item?.languages_code === languageApp) {
                                                            return (
                                                                <React.Fragment key={z}>
                                                                    <h2
                                                                        style={{
                                                                            color: `${companyInfor?.data[0]?.color_text_heading}`,
                                                                            cursor: 'pointer',
                                                                        }}
                                                                        className="mb-3 fw-bold"
                                                                        onClick={() => SwitchPage(ele?.id)}
                                                                    >
                                                                        {item?.title}
                                                                    </h2>
                                                                    <table style={{ fontSize: '16px' }}>
                                                                        <tbody>
                                                                            {renderBlock(item?.content?.blocks)}
                                                                        </tbody>
                                                                    </table>
                                                                </React.Fragment>
                                                            );
                                                        }
                                                    })}
                                                </div>
                                                <div
                                                    className="photo-child col-md-5 col-12"
                                                    onClick={() => SwitchPage(ele?.id)}
                                                >
                                                    <img
                                                        src={`${import.meta.env.VITE_BACKEND_URL}/assets/${ele?.image}`}
                                                        className="mb-2"
                                                        alt={ele?.title || 'Image'}
                                                    />
                                                </div>
                                            </div>
                                        ),
                                )}
                        </div>
                        {photos?.length > 0 && (
                            <ReactPaginate
                                previousLabel={languageApp === LANGUAGES.EN ? 'Previous' : 'Trước'}
                                nextLabel={languageApp === LANGUAGES.EN ? 'Next' : 'Sau'}
                                breakLabel={'...'}
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={3}
                                onPageChange={handlePageClick}
                                containerClassName={'pagination'}
                                activeClassName={'active'}
                            />
                        )}
                    </div>
                </div>
            )}
        </>
    );
});

export default ListPhoto;
