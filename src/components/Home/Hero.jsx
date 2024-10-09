import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import {Link} from 'react-router-dom';
const spanStyle = {
    fontSize:'60px',
    lineHeight:'68px',
    fontWeight:'600',
    color: '#ffffff',


  }
  
const divStyle = {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    height: '600px'
};
const slideImages = [
    {
        url:'./img/1.jpg',
        caption: 'Explore The World Of Our Graduates'
    },
    {
        url: './img/2.jpg',
        caption: 'Better Education For A Better World'
    },
    {
        url: './img/3.jpg',
        caption: 'Explore The World Of Our Graduates'
    },
    {
        url: './img/4.jpg',
        caption: 'Exceptional People, Exceptional Care'
    },
];
const Hero = () => {
    return (
        <>
        <div className="slide-container">
            <Slide>
            {slideImages.map((slideImage, index)=> (
                <div  key={index}>
                    <div className='banner-info' style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                        <div style={{position:'relative'}}>

                        <div className="container text-center mx-auto" style={{maxWidth:'700px'}}>
                            <h5 style={spanStyle}>{slideImage.caption}
                            </h5>

                            <div style={{position:'absolute', top:'150px',textAlign:'center', width:'100%',borderRadius:'15px'}}>

                            <Link to="/"   className="btn-them2 mt-4">Read More</Link>
                            </div>
                        </div>
                        </div>

                    </div>
                </div>
            ))} 
            </Slide>
            
      </div>
        </>
    )
}

export default Hero