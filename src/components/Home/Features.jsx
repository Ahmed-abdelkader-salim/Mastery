import { FaLaptop,FaUsers,FaBook } from 'react-icons/fa';
import {Link} from 'react-router-dom';
const Features = () => {
    return (
        <section className="features">
            <div className="grid top-bottom mb-lg-5 pb-lg-5">
                <div className="container">
                    <div className="middle-section grid-column text-center">
                        <div className="three-grids-columns">
                            <FaLaptop color="#fdc800" size={50} style={{paddingBottom:'1rem'}}/>
                            <h4>Learn Courses Online</h4>
                            <p className='text'>Auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet</p>
                            <Link to="" className="btn-theme3 mt-3">Read More</Link>
                            
                        </div>
                        <div className="three-grids-columns">
                            <FaUsers color="#fdc800" size={50} style={{paddingBottom:'1rem'}}/>
                            <h4>Highly Qualified Teachers</h4>
                            <p className='text'>Auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet</p>
                            <Link to="" className="btn-theme3 mt-3">Read More</Link>
                            
                        </div>
                        <div className="three-grids-columns">
                            <FaBook color="#fdc800" size={50} style={{paddingBottom:'1rem'}}/>
                            <h4>Book Library & Stores</h4>
                            <p className='text'>Auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet</p>
                            <Link to="" className="btn-theme3 mt-3">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features