import imgIcon from '../../assets/images.jpeg';
const Testimonials = () => {
    return (
        <>
        <section className="testimonials">
            <div className="customer-block py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pr-md-5">
                            <div className="heading">
                                <h3 className="head-text">Hear what our students have to say</h3>
                                <p className="my-3 text-white">
                                Magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet, consectetur adipisicingelit, Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                Nulla mollis dapibus nunc, ut rhoncus
                                turpis sodales quis. Integer sit amet mattis quam.
                                </p>
                                <p className="my-3 text-white">
                                Magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet, consectetur adipisicingelit, Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                Nulla mollis dapibus nunc, ut rhoncus
                                turpis sodales quis. Integer sit amet mattis quam.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 mt-md-0">
                            <div className="text-center">
                                <div className="imgtitle">
                                    <img src={imgIcon} alt="img" />
                                </div>
                                <h6 className="mt-3 head">Sarah Davied</h6>
                                <p>Web developer</p>
                                <p> 
                                    Magna aliqua. Ut enim ad minim veniam, quis nostrud.
                                    Lorem ipsum dolor sit amet, consectetur adipisicingelit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        
        
        </>
    )
}

export default Testimonials