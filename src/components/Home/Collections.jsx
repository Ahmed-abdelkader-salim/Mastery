import {Link} from 'react-router-dom';
import imgCollection from '../../assets/women.jpg';
import {Row, Container} from 'react-bootstrap';
const Collections = () => {
    return (
        <div className="collection py-5" id="about">
            <Container className="py-md-3">
                <Row>
                    <div className="column center-align-self col-lg-6 pr-lg-5">
                        <h5 className="edit-content">Welcome To Our Campus</h5>
                        <p className="moregap">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
						architecto, ex veritatis tempora aliquid labore natus autem iusto magni dicta incidunt nostrum
						odit veniam voluptas provident minus saepe reiciendis nulla dolore delectus molestias
                        </p>
                        <p className="moregap">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
						architecto, ex veritatis tempora aliquid labore natus autem iusto magni dicta incidunt nostrum
						odit veniam voluptas provident minus saepe reiciendis nulla dolore delectus molestias
                        </p>
                        <Link to="/services" className="btn-theme3 mt-3">Read More</Link>
                    </div>
                    <div className="column left col-lg-6">
                        <img src={imgCollection} alt="imgCollection" />
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Collections