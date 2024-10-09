import img1 from '../../assets/t1.jpg';
import img2 from '../../assets/t3.jpg';
import {Link} from 'react-router-dom';
import {FaFacebookF, FaTwitter, FaGooglePlusG} from 'react-icons/fa';
const Teams = () => {
    return (
        <>
        <section className="teams py-5">
            <div className="container">
                <div className="heading mx-auto text-center">
                    <h3 className="head">Our Skilled Instructors</h3>
                    <p className="my-3">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                    Nulla mollis dapibus nunc, ut rhoncus
                    turpis sodales quis. Integer sit amet mattis quam.
                    </p>
                </div>  
                <div className="row pt-5 mt-3">
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-grid text-center">
                            <div className="team-img">
                                <img src={img1} alt="imgg"  className='img-fluid rounded'/>
                            </div>
                            <div className="team-info">
                                <h4>Ali sami</h4>
                                <ul className='d-flex justify-content-center py-3'>
                                    <li className='icon-effect'>
                                        <Link to="/">
                                            <span >
                                            <FaFacebookF size={20} className='ico'/> 
                                            </span>
                                        </Link>
                                    </li >
                                    <li>
                                        <Link to="/">
                                            <span >
                                            <FaTwitter size={20} className='ico'/> 
                                            </span>
                                        </Link>
                                    </li>
                                    <li className='icon-effect'> 
                                        <Link to='/'> 
                                            <span >
                                            <FaGooglePlusG size={20} className='ico'/> 
                                            </span> 
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6" style={{marginTop:'4em'}}>
                    <div className="team-grid text-center">
                            <div className="team-img">
                                <img src={img2} alt="imgg"  className='img-fluid rounded'/>
                            </div>
                            <div className="team-info">
                                <h4>Ali sami</h4>
                                <ul className='d-flex justify-content-center py-3'>
                                    <li className='icon-effect'>
                                        <Link to="/">
                                            <span >
                                            <FaFacebookF size={20} className='ico'/> 
                                            </span>
                                        </Link>
                                    </li >
                                    <li>
                                        <Link to="/">
                                            <span >
                                            <FaTwitter size={20} className='ico'/> 
                                            </span>
                                        </Link>
                                    </li>
                                    <li className='icon-effect'> 
                                        <Link to='/'> 
                                            <span>
                                            <FaGooglePlusG size={20} className='ico'/> 
                                            </span> 
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mt-sm-0 mt-5">
                        <div className="team-grid text-center">
                            <div className="team-img">
                                <img src={img1} alt="imgg"  className='img-fluid rounded'/>
                            </div>
                            <div className="team-info">
                                <h4>Ali sami</h4>
                                <ul className='d-flex justify-content-center py-3'>
                                    <li className='icon-effect'>
                                        <Link to="/">
                                            <span>
                                            <FaFacebookF size={20} className='ico'/> 
                                            </span>
                                        </Link>
                                    </li >
                                    <li>
                                        <Link to="/">
                                            <span >
                                            <FaTwitter size={20} className='ico'/> 
                                            </span>
                                        </Link>
                                    </li>
                                    <li className='icon-effect'> 
                                        <Link to='/'> 
                                            <span >
                                            <FaGooglePlusG size={20} className='ico'/> 
                                            </span> 
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6" style={{marginTop:'4em'}}>
                    <div className="team-grid text-center">
                            <div className="team-img">
                                <img src={img2} alt="imgg"  className='img-fluid rounded'/>
                            </div>
                            <div className="team-info">
                                <h4>Ali sami</h4>
                                <ul className='d-flex justify-content-center py-3'>
                                    <li className='icon-effect'>
                                        <Link to="/">
                                            <span >
                                            <FaFacebookF size={20} className='ico'/> 
                                            </span>
                                        </Link>
                                    </li >
                                    <li>
                                        <Link to="/">
                                            <span >
                                            <FaTwitter size={20} className='ico'/> 
                                            </span>
                                        </Link>
                                    </li>
                                    <li className='icon-effect'> 
                                        <Link to='/'> 
                                            <span >
                                            <FaGooglePlusG size={20} className='ico'/> 
                                            </span> 
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>        
        </>
    )
}

export default Teams