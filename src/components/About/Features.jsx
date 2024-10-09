import { FaGraduationCap, FaUser, FaBook, FaBed } from "react-icons/fa"
const Features = () => {
    return (
        <>
        <section className="w3l-features1">
            <div className="features py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="icon-info">
                                <h5>Our History 1998</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, 
                                    consectetur adipisicingelit, sed
                                    do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mt-4 mt-sm-0">
                            <div className="icon-info">
                                <h5>Over 100 Facalties</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, 
                                    consectetur adipisicingelit, sed
                                    do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mt-4 mt-lg-0">
                            <h5>We Have 12,000 Students</h5>
                            <p>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipisicingelit, sed
                                do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis nostrud.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="w3l-features2">
            <div className="grid-top py-5">
                <div className="containr py-md-5">
                    <div className="heading text-center mx-auto">
                        <h3 className="head">Why Choose Our Institution</h3>
                        <p className="my-3">
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere<br /> 
                            cubilia Curae;
                            Nulla mollis dapibus nunc, ut rhoncus <br />
                            turpis sodales quis. Integer sit amet mattis quam.
                        </p>
                    </div>
                    <div className="middle-section">
                        <div className="row mt-5 pt-3">
                            <div className="col-lg-3 col-sm-6 text-center">
                                <div className="icon">
                                    <span>
                                        <FaGraduationCap className="fa"/>
                                    </span>
                                </div>
                                <h4>Scholarship Facility</h4>
                                <p>Vestibulum ante ipsum primis in <br/>faucibus orci luctus et ultrices posuere</p>
                            </div>
                            <div className="col-lg-3 col-sm-6 text-center  mt-4 mt-sm-0 ">
                            <div className="icon">
                                <span>
                                    <FaUser className="fa"/>
                                </span>
                            </div>
                                <h4>Skilled Lecturers</h4>
                                <p>Vestibulum ante ipsum primis in  <br/>faucibus orci luctus et ultrices posuere</p>
                            </div>
                            <div className="col-lg-3 col-sm-6  mt-4 mt-lg-0 text-center">
                            <div className="icon">
                                <span>
                                    <FaBook className="fa"/>
                                </span>
                            </div>
                            <h4> Library & Store</h4>
                            <p>Vestibulum ante ipsum primis in <br/>faucibus orci luctus et ultrices posuere</p>
                            </div>
                            <div className="col-lg-3 col-sm-6 text-center  mt-4 mt-lg-0 ">
                            <div className="icon">
                                <span>
                                    
                                <FaBed className="fa"/>
                                </span>
                            </div>
                                <h4>Hostel Facilities</h4>
                                <p>Vestibulum ante ipsum primis in <br/>faucibus orci luctus et ultrices posuere</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Features