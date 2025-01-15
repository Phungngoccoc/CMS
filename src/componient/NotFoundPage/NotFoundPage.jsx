import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { path } from '../../utils/constant';

const NotFoundPage = React.memo(() => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(path.HOME);
    });
    return (
        <>
            <div className="not-found-page-container">
                <div
                    className="container text-center d-flex flex-column align-item-center justify-content-center"
                    style={{ height: '500px', fontSize: '20px' }}
                >
                    <h1 style={{ fontWeight: 'bold' }}>Oops! Looks Like You Lost Your Way.</h1>
                    <div className="d-flex align-item-center justify-content-center">
                        <input
                            type="text"
                            style={{
                                width: '100%',
                                padding: '20px 20px',
                                border: 'none',
                                outline: 'none',
                                backgroundColor: '#eee',
                            }}
                            placeholder="Enter key word here..."
                        />
                        <div
                            className="d-flex align-item-center justify-content-center"
                            style={{ backgroundColor: 'black', width: '70px', height: '70px', color: 'white' }}
                        >
                            <i className="fa fa-search mt-4"></i>
                        </div>
                    </div>
                    <h2 className="mt-3">
                        or{' '}
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            Go To Home Page
                        </Link>
                    </h2>
                </div>
            </div>
        </>
    );
});

export default NotFoundPage;
