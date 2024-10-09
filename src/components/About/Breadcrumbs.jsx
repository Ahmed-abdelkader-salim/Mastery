import Breadcrumb  from 'react-bootstrap/Breadcrumb';
import {Link} from 'react-router-dom';
const Breadcrumbs = () => {
    return (
        <>
        <div className="about-breadcrum">
            <div className="breadcrum-bg py-4 py-sm-5">
                <div className="container">
                    <h2 className='page-title'>About Us</h2>
                <Breadcrumb>
                    <p className='mt-2'>
                    <Link to="/" className="text-white fs-5">Home</Link>  
                        <span className='text-white fs-5'> / About</span>
                    </p>
                </Breadcrumb>
                </div>
            </div>            
        </div>
        
        </>
    )
}

export default Breadcrumbs