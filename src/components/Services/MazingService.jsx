import {FaFile, FaTrophy, FaClone, FaBullseye,FaCube, FaSpinner, FaAngleRight } from 'react-icons/fa'
import {Link} from 'react-router-dom'
const MazingService = () => {
    return (
        <>

        <div className="amazing-services py-5">
            <div className="container py-md-3">
                <div className="heading text-center mx-auto">
                    <h3 className="head">Amazing Services</h3>
                    <p className="my-3">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia Curae;
                    Nulla mollis dapibus nunc, ut rhoncus
                    turpis sodales quis. Integer sit amet mattis quam.
                    </p>
                </div>
                <div className="bottom-services">
                    <div className="row mt-5 pt-3">
                        <div className="col-lg-4 col-md-6 grid">
                            <div className="icon">
                                <FaFile size={36} color='#d1a501'/>
                            </div>
                            <div className="icon-info">
                            <h5>24 H Support</h5>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt  </p>
                            <Link to='' className='link mt-3'>Read More
                                <FaAngleRight color='#d1a501' className='pl-1'/>
                            </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-md-0 mt-5 grid">
                            <div className="icon">
                                <FaTrophy size={36} color='#d1a501'/>
                            </div>
                            <div className="icon-info">
                            <h5>24 H Support</h5>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt  </p>
                            <Link to='' className='link mt-3'>Read More
                                <FaAngleRight color='#d1a501' className='pl-1'/>
                            </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-lg-0 mt-5 grid">
                            <div className="icon">
                                <FaClone size={36} color='#d1a501'/>
                            </div>
                            <div className="icon-info">
                            <h5>24 H Support</h5>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt  </p>
                            <Link to='' className='link mt-3'>Read More
                                <FaAngleRight color='#d1a501' className='pl-1'/>
                            </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5 grid">
                            <div className="icon">
                                <FaBullseye size={36} color='#d1a501'/>
                            </div>
                            <div className="icon-info">
                            <h5>24 H Support</h5>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt  </p>
                            <Link to='' className='link mt-3'>Read More
                                <FaAngleRight color='#d1a501' className='pl-1'/>
                            </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5 grid">
                            <div className="icon">
                                <FaCube size={36} color='#d1a501'/>
                            </div>
                            <div className="icon-info">
                            <h5>24 H Support</h5>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt  </p>
                            <Link to='' className='link mt-3'>Read More
                                <FaAngleRight color='#d1a501' className='pl-1'/>
                            </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5 grid">
                            <div className="icon">
                                <FaSpinner size={36} color='#d1a501'/>
                            </div>
                            <div className="icon-info">
                            <h5>24 H Support</h5>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt  </p>
                            <Link to='' className='link mt-3'>Read More
                                <FaAngleRight color='#d1a501' className='pl-1'/>
                            </Link>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
        
        </>
    )
}

export default MazingService