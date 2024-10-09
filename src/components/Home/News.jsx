import { Link } from 'react-router-dom';
import imgIcon from '../../assets/qq.png';

const News = () => {
    return (
        <>
        <section className="news">
        <div className="main py-5">
            <div className="container py-md-3">
                <div className="row py-md-5">
                    <div className="col-lg-6">
                        <h3 className="latest">Latest Posts</h3>
                        <div className="tatest-top mt-4 mt-md-5">
                            <div className="box">
                                <div className="grid-column">
                                    <div className="column-img">
                                        <img src={imgIcon} alt="kk" className='img-fluid' />
                                    </div>
                                    <div className="column-text">
                                        <div className="job-info">
                                            <h6>
                                                <Link to="#" className='pricehead'>Summer Course Starts </Link>
                                            </h6>
                                            <h5>April 25, 2020</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit architecto..</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box top-middle">
                                <div className="grid-column">
                                    <div className="column-img">
                                        <img src={imgIcon} alt="kk" className='img-fluid' />
                                    </div>
                                    <div className="column-text">
                                        <div className="job-info">
                                            <h6>
                                                <Link to="#" className='pricehead'>Summer Course Starts </Link>
                                            </h6>
                                            <h5>April 25, 2020</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit architecto..</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="grid-column">
                                    <div className="column-img">
                                        <img src={imgIcon} alt="kk" className='img-fluid' />
                                    </div>
                                    <div className="column-text">
                                        <div className="job-info">
                                            <h6>
                                                <Link to="#" className='pricehead'>Summer Course Starts </Link>
                                            </h6>
                                            <h5>April 25, 2020</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit architecto..</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4 float-end'>
                            <Link to="" className='btn-them2'>View All</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3 className='latest'>Upcoming Events</h3>
                        <div className="events mt-4 mt-md-5">
                            <div className="event-left">
                                <div className="icon-top">
                                    <h3>20</h3>
                                    <p>Nov</p>
                                    <span>2024</span>
                                </div>
                            </div>
                            <div className="event-right">
                            <h6>
                                <Link to="#" className='pricehead'>Summer Course Starts </Link>
                            </h6>
                            <p>
                            Vestibulum ante ipsum primis in faucibus orci luctus et 
                            ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
                            turpis sodales quis. Integer sit amet mattis quam.
                            </p>
                            <li>07:00- 10:00</li>
                            <li className='border-left'>Usa,sanandries</li>
                            </div>
                        </div>
                        <div className="events mt-4 mt-md-5">
                            <div className="event-left">
                                <div className="icon-top">
                                    <h3>20</h3>
                                    <p>Nov</p>
                                    <span>2024</span>
                                </div>
                            </div>
                            <div className="event-right">
                            <h6>
                                <Link to="#" className='pricehead'>Summer Course Starts </Link>
                            </h6>
                            <p>
                            Vestibulum ante ipsum primis in faucibus orci luctus et 
                            ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
                            turpis sodales quis. Integer sit amet mattis quam.
                            </p>
                            <li>07:00- 10:00</li>
                            <li className='border-left'>Usa,sanandries</li>
                            </div>
                        </div>
                        <div className='mt-4 float-end'>
                            <Link to="" className='btn-them2'>View All</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </section>
        
        </>
    )
}

export default News