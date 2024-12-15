import React, { useEffect, useState } from 'react';
import '../../Style/ListPhoto.scss';
import arrow from '../../../assets/image/arrow-right.svg';
import { useSelector } from 'react-redux';
import { STATUS } from '../../../utils/constant';

// Hàm kiểm tra URL hợp lệ
const isValidUrl = (string) => {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
};

const ListPhoto = React.memo((props) => {
    const language = useSelector((state) => state.language.language);

    // Lấy tối đa 6 phần tử từ mảng
    const itemsToRender = props?.data?.item?.content?.slice(0, 12);

    return (
        <>
            {props?.data?.item?.status === STATUS.PUBLISH && (
                <div className="photo-gallery-container">
                    <div className="container">
                        <div className="d-flex flex-sm-row flex-column justify-content-between align-items-center mb-3">
                            <h4 className="mb-sm-0 mb-4">{props.data.item?.title}</h4>
                        </div>
                        <div className="row">
                            {itemsToRender?.map((ele, index) => {
                                return (
                                    ele?.item?.status === STATUS.PUBLISH && (
                                        <div className="col-sm-4 col-6 text-center mb-4" key={index}>
                                            <div className="photo-child">
                                                <img
                                                    src={
                                                        isValidUrl(ele.item.image)
                                                            ? ele.item.image
                                                            : `${import.meta.env.VITE_BACKEND_URL}/assets/${ele.item.image}`
                                                    }
                                                    className="mb-2"
                                                    alt={ele.item.title}
                                                />
                                                <span>{ele.item.title}</span>
                                            </div>
                                        </div>
                                    )
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
});

export default ListPhoto;
