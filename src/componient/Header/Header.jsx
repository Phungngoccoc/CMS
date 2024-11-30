import React from "react";
import '../Style/Header.scss';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = (props) => {
    return (
        <div className="header-container">
            {["lg"].map((expand) => ( //'sm', 'md', 'lg', 'xl', 'xxl'
                <Navbar key={expand} expand={expand} className="mb-3 nav-bar container">
                    <Container fluid className="nav-container">
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="toggle-menu" />
                        <Navbar.Brand href="#">KemStore</Navbar.Brand>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{ width: "100%", borderBottom: "1px solid #ddd" }}>
                                    <div className="account d-flex">
                                        <div className="mx-3">
                                            <i className="fa fa-user"></i>
                                        </div>
                                        <div>
                                            <span>Tài khoản</span><br></br>
                                            <span>Đăng nhập</span>
                                        </div>
                                    </div>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="nav-body">
                                <Nav className="justify-content-center flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Trang chủ</Nav.Link>
                                    <Nav.Link href="#action2">Sản phẩm</Nav.Link>
                                    <Nav.Link href="#action2">Ưu đãi</Nav.Link>
                                    <NavDropdown
                                        title="Giới thiệu"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        style={{ border: "none" }}

                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#action2">Hệ thống cửa hàng</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        <div className="nav-btn">
                            <button><i className="fa fa-search d-none d-sm-block"></i></button>
                            <button><i className="fa fa-user"></i></button>
                            <button><i className="fa fa-cart-plus"></i></button>
                        </div>
                    </Container>
                </Navbar>
            ))}
        </div>
    );
};

export default Header;
