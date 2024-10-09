import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa"
const Contacts = () => {
    return (
        <>
        <section className="w3l-contacts">
            <div className="contact-top pt-5 mb-5">
                <div className="container py-md-3">
                    <div className="row main">
                        <div className="col-lg-4">
                            <div className="left">
                                <div className="cont-add">
                                    <div className="cont-add-left">
                                        <h4>Address:</h4>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="cont-add-right">
                                        <FaMapMarkerAlt/>
                                    </div>
                                </div>
                                <div className="cont-add add-2 border-b-t">
                                    <div className="cont-add-left">
                                        <h4>Eamil:</h4>
                                        <p><a href="mailto:" className="text-decoration-none text-black">info@example.com</a></p>
                                    </div>
                                    <div className="cont-add-right">
                                        <FaEnvelope/>
                                    </div>
                                </div>
                                <div className="cont-add">
                                    <div className="cont-add-left">
                                        <h4>Phone:</h4>
                                        <p><a href="tel:" className="text-decoration-none text-black">+20 1501320131</a></p>
                                    </div>
                                    <div className="cont-add-right">
                                        <FaPhone/>
                                    </div>
                                </div>
                                <div className="cont-add b-top">
                                    <div className="cont-add-left">
                                        <h4>Find Us On</h4>
                                        <div className="main-icon mt-2">
                                            <a href="#"><FaFacebookF/></a>
                                            <a href="#"><FaTwitter/></a>
                                            <a href="#"><FaInstagram/></a>
                                            <a href="#"><FaGooglePlusG/></a>
                                            <a href="#"><FaLinkedinIn/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-lg-0 mt-5">
                                <form action="">
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" placeholder="Name"/>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <input type="email" placeholder="Email"/>
                                </div>
                                <div className="col-lg-12 mb-4">
                                    <input type="phone" placeholder="Phone Number"/>
                                </div>
                                <div className="col-lg-12 mb-4">
                                    <textarea  id="" placeholder="message"></textarea>
                                </div>
                                <div className="col-lg-12">

                                <button type="submit" className="btn btn-warning btn fs-5">Submit Now</button>
                                </div>

                            </div>
                                </form>
                               
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contacts