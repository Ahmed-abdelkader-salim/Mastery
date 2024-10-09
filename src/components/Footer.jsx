import { FaMapMarkerAlt,FaPhone, FaEnvelopeOpen,FaHeart, FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn ,FaGooglePlusG, FaEnvelope  } from "react-icons/fa"
import ScrollToTop from "./ScrollToTop"
const Footer = () => {
    return (
        <>
        <section className="w3l-footer">
            <footer className="footer">
                <div className="container">
                    <div className="d-grid">
                        <div className="footer-list1">
                            <h6 className="footer-title">Contact Us</h6>
                            <ul>
                                <li>
                                    <p><FaMapMarkerAlt style={{color:'#fdc800', width:'20px'}}/> Estate Business, #32841 block, #221DRS Real estate business building, UK.</p>
                                </li>
                                <li>
                                <a href="tel:+7-800-999-800"><FaPhone style={{color:'#fdc800', width:'20px'}}/> +(21)-255-999-8888</a>
                                </li>
                                <li>
                                <a href="mailto:corporate-mail@support.com" className="mail"><FaEnvelopeOpen  style={{color:'#fdc800', width:'20px'}}/> corporate-mail@support.com</a>
                                </li>
                            </ul>
                            <div className="main-icon">
                                <a href="#" className='facebook'><FaFacebookF/></a>
                                <a href="#" className='twitter'><FaTwitter/></a>
                                <a href="#" className='instagram'><FaInstagram/></a>
                                <a href="#" className='google-plus'><FaGooglePlusG/></a>
                                <a href="#" className='linkedin'><FaLinkedinIn/></a>
                            </div>
                        </div>
                        <div className="footer-list1">
                            <h6 className="footer-title">Featured Links</h6>
                            <ul>
                                <li><a href="#">Graduation</a></li>
                                <li><a href="#">Admission</a></li>
                                <li><a href="#">Book Store</a></li>
                                <li><a href="#">International</a></li>
                                <li><a href="#">Courses</a></li>
                            </ul>
                        </div>
                        <div className="footer-list1">
                        <h6 className="footer-title">Newsletter</h6>
                        <form action="" className="d-flex" style={{marginBottom:'25px'}}>
                            <input type="email" name="email" placeholder="Email" required/>
                            <button>
                                <FaEnvelope/>
                            </button>
                        </form>
                        <p>Subscribe and get our weekly newsletter</p>
                        <p>Well never share your email address</p>
                        </div>
                        <div className="footer-list1">
                        <h6 className="footer-title">Quick Links</h6>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                        </div>

                    </div>
                    <div className="grid-bottom">
                        <div className="copy-footer">
                            <p>© 2020 My <FaHeart color='red' size={19}/> . All rights reserved | Designed by </p>
                        </div>
                            <ul className="list">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of services</a></li>
                            </ul>
                    </div>
                </div>

            </footer>
        </section>

        {/* Move top */}

        <ScrollToTop/>
        </>
    )
}

export default Footer