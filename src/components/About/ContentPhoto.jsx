import { FaCheck } from "react-icons/fa"
import imgSrc from '../../assets/qq.png';
const ContentPhoto = () => {
    return (
        <>
        <section className="content-photo pt-5">
            <div className="container py-md-5">
                <div className="row">
                    <div className="col-lg-6 text">
                        <h3 className="title">About Our Institution</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                        </p>
                        <ul className="count4">
                            <li><FaCheck style={{color:'#fdc800',paddingRight:'5px'}}/> Materiality & Interpretation</li>
                            <li><FaCheck style={{color:'#fdc800',paddingRight:'5px'}}/> Design Management and Cultural Enterprise </li>
                            <li><FaCheck style={{color:'#fdc800',paddingRight:'5px'}}/> Experience Design (XD)</li>
                            <li><FaCheck style={{color:'#fdc800',paddingRight:'5px'}}/> Sound Design; Social Media and SEO </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 img pl-lg-5 mt-5 mt-lg-0">
                        <img src={imgSrc} alt="img"  className="img-fluid rounded-2"/>
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}

export default ContentPhoto