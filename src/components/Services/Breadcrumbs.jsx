import {Link} from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Breadcrumbs = () => {
    return (

        <div className="services-breadcrumb">
            <div className="breadcrum-bg py-sm-5 py-4">
                <div className="container">
                        <h2 className='page-title'>Our Services</h2>
                    <Breadcrumb>
                        <p className='mt-2'>
                        <Link to="/" className="text-white fs-5">Home</Link>  
                            <span className='text-white fs-5'> / services</span>
                        </p>
                    </Breadcrumb>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumbs