import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { HiMiniPencilSquare } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

const NavbarNav = () => {
    return (
        <>
        <section className="w3l-top-menu-1">
            <div className="top-hd">
                <div className="container">
                    <header className="row top-menu-top">
                        <div className="accounts col-md-9 col-6">
                                <li className="top_li"><span className="icon"><FaPhone /></span><a href="tel:+142 5897555">+142 5897555</a> </li>
                                <li className="top_li1"><span className="icon"><FaEnvelope /></span> <a href="mailto:education-mail@support.com" className="mail"> info@example.com</a>	</li>
                        </div>
                        <div className="social-top col-md-3 col-6">
                            <NavLink to="" className=" btn-theme4">Apply Now</NavLink>
                        </div>
                    </header>
                </div>
            </div>
        </section>
        <Navbar className="navbar navbar-expand-lg navbar-light py-lg-2 py-4" expand="lg">
            <Container>
                <NavLink className="brand" to="/"> <span> <HiMiniPencilSquare className="logo" /> </span>
                Mastery</NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="mx-auto">

                    <NavLink to="/" className="navlink">Home</NavLink>
                    <NavLink to="/about" className="navlink">About</NavLink>
                    <NavLink to="/services" className="navlink">Services</NavLink>
                    <NavLink to="/contact" className="navlink">Contact</NavLink>


                </Nav>
                <Form className="form-inline position-relative my-2 my-lg-0">
                <input
                    type="search"
                    placeholder="Search"
                    className="me-2 search"
                    aria-label="Search"
                />
                <button className=" btn-search" type="button"><span aria-hidden="true"><CiSearch /></span></button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default NavbarNav