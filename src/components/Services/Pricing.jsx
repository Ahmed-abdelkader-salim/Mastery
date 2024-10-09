import {Link} from 'react-router-dom'
const Pricing = () => {
    return (
        <section className='pricing py-5'>
            <div className="container py-md-3">
                <div className="heading text-center mx-auto">
                    <h3 className="head">
                    See Our Packages
                    </h3>
                    <p className="my-3">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                    Nulla mollis dapibus nunc, ut rhoncus
                    turpis sodales quis. Integer sit amet mattis quam.
                    </p>
                </div>
                <div className="row top pt-3 mt-5">
               
                    <div className="col-lg-4 col-md-6 ">
                        <div className="price-box text-center">
                            <h6>Basic Pack</h6>
                            <div className="pricing-top">
                                <h3 className="sub-title">
                                $199.00
                                </h3>
                                <p>1 Month</p>
                            </div>
                            <div className="pricing-bottom">
                                <div className="text-pricing-bottom">
                                    <ul className="links">
                                        <li className="info">Vestibulum ante ipsum</li>
                                        <li className="info">Vestibulum ante ipsum</li>
                                        <li className="info">Rhoncus turpis sodales </li>
                                        <li className="info">Rhoncus turpis sodales </li>
                                        <li className="info">Rhoncus turpis sodales </li>
                                        <li className="info">Rhoncus turpis sodales </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="request-btn mt-5 mb-4">
                                <Link to='/contact' className='btn-them'>Request Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                        <div className="price-box text-center">
                            <h6>Basic Pack</h6>
                            <div className="pricing-top">
                                <h3 className="sub-title">
                                $199.00
                                </h3>
                                <p>1 Month</p>
                            </div>
                            <div className="pricing-bottom">
                                <div className="text-pricing-bottom">
                                    <ul className="links">
                                        <li className="info">Vestibulum ante ipsum</li>
                                        <li className="info">Vestibulum ante ipsum</li>
                                        <li className="info">Rhoncus turpis sodales </li>
                                        <li className="info">Rhoncus turpis sodales </li>
                                        <li className="info">Orci luctus et ultrices</li>
                                        <li className="info">Rhoncus turpis sodales</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="request-btn mt-5 mb-4">
                                <Link to='/contact' className='btn-them'>Request Now</Link>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                        <div className="price-box text-center">
                            <h6>Basic Pack</h6>
                            <div className="pricing-top">
                                <h3 className="sub-title">
                                $199.00
                                </h3>
                                <p>1 Month</p>
                            </div>
                            <div className="pricing-bottom">
                                <div className="text-pricing-bottom">
                                    <ul className="links">
                                        <li className="info">Vestibulum ante ipsum</li>
                                        <li className="info">Vestibulum ante ipsum</li>
                                        <li className="info">Orci luctus et ultrices</li>
                                        <li className="info">Rhoncus turpis sodales</li>
                                        <li className="info">Rhoncus turpis sodales </li>
                                        <li className="info">Orci luctus et ultrices</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="request-btn mt-5 mb-4">
                                <Link to='/contact' className='btn-them'>Request Now</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Pricing