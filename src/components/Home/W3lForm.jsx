import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import { FaCode, FaDesktop, FaFlask, FaGg, FaMale, FaMoneyBill, FaMousePointer, FaSuitcase } from 'react-icons/fa';
const w3lForm = () => {
    return (
        <>
        <section className="w3l-form">
            <div className="content py-5">
                <div className="container">
                    <div className="grid-grid-column py-md-5">
                        <div className="grid-column1">
                            <h4 className="tagline">Find your course</h4>
                            <p>Fill in below form to find your courses</p>
                            <Form method="GET">
                                <div className="mb-4">
                                    <input type="text" className='input-form' name='name' placeholder='Course Name'  />
                                </div>
                                <div className="mb-4">
                                    <select  id="category" className='select-form'>
                                        <option selected>Category</option>
                                        <option value="1">Computers</option>
                                        <option value="2">Science</option>
                                        <option value="3">History</option>
                                        <option value="4">Economics</option>
                                    </select>
                                </div>
                                <Button type="submit" className="btn-submit btn-warning w-100 fs-6">Submit</Button>
                            </Form>
                        </div>
                        <div className="grid-column2">
                            <div className="row">
                                <div className="col-md-3 col-sm-6 col-6 mb-4">
                                    <Link to="/services" className='servLink'>
                                        <div className="course-item">
                                            <FaMale size={35} color="#fff"/>
                                            <p>Socioligy</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 col-sm-6 col-6 mb-4">
                                    <Link to="/services"  className='servLink'>
                                        <div className="course-item">
                                            <FaSuitcase size={35} color="#fff"/>
                                            <p>Business</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 col-sm-6 col-6">
                                    <Link to="/services"  className='servLink'>
                                        <div className="course-item">
                                            <FaCode size={35} color="#fff"/>
                                            <p>Web Dev</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 col-sm-6 col-6 ">
                                    <Link to="/services"  className='servLink'>
                                        <div className="course-item">
                                            <FaFlask size={35} color="#fff"/>
                                            <p>Science</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 col-sm-6 col-6 mt-4">
                                    <Link to="/services"  className='servLink'>
                                        <div className="course-item">
                                            <FaMoneyBill size={35} color="#fff"/>
                                            <p>Economics</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 col-sm-6 col-6 mt-4">
                                    <Link to="/services"  className='servLink'>
                                        <div className="course-item">
                                            <FaGg size={35} color="#fff"/>
                                            <p>Biology</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 col-sm-6 col-6 mt-4">
                                    <Link to="/services"  className='servLink'>
                                        <div className="course-item">
                                            <FaDesktop size={35} color="#fff"/>
                                            <p>Computing</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-3 col-sm-6 col-6 mt-4">
                                    <Link to="/services"  className='servLink'>
                                        <div className="course-item">
                                            <FaMousePointer size={35} color="#fff"/>
                                            <p>Web Design</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}

export default w3lForm