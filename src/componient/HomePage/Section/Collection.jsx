import React, { useEffect, useState } from "react";
import "../../Style/Collection.scss"

const Collection = () => {
    return (
        <div className="section-collection pt-5">
            <h2 className="text-center">NEW COLLECTIONS</h2>
            <div className="row mt-5">
                <div className="col-md-6 ">
                    <a>
                        <img src="https://theme.hstatic.net/200000758093/1001198251/14/banner_cus_1.jpg?v=443" />
                    </a>
                </div>
                <div className="col-md-3 col-6 d-flex flex-column justify-content-between">
                    <a>
                        <img src="https://theme.hstatic.net/200000758093/1001198251/14/banner_cus_2.jpg?v=443" />
                    </a>
                    <a>
                        <img src="https://theme.hstatic.net/200000758093/1001198251/14/banner_cus_4.jpg?v=443" />
                    </a>
                </div>
                <div className="col-md-3 col-6 d-flex flex-column justify-content-between">
                    <a>
                        <img src="https://theme.hstatic.net/200000758093/1001198251/14/banner_cus_1.jpg?v=443" />
                    </a>
                    <a>
                        <img src="https://theme.hstatic.net/200000758093/1001198251/14/banner_cus_3.jpg?v=443" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Collection;
