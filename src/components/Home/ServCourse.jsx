import {Link} from 'react-router-dom';

const ServCourse = () => {
    return (
    <div className="servCourse" id="course">
        <div className="content">
            <div className="container">
                <div className="grid-column">
                    <div className="column1">
                        <div className="heading">
                            <h3 className="head text-white">
                            Apply for Scholarship
                            </h3>
                            <h4>Fall 2019 applications are now open</h4>
                            <p className="my-3 text-white"> 
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
						        Nulla mollis dapibus nunc, ut rhoncus
						        turpis sodales quis. Integer sit amet mattis quam.
                            </p>
                        </div>
                    </div>
                    <div className="column2">
                    <Link to="/contact"   className="btn-them2 mt-t">Apply here</Link>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ServCourse