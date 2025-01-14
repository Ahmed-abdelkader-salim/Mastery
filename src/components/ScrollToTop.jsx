import { useState, useEffect } from "react"
import { FaArrowUp } from "react-icons/fa"
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if(window.scrollY >= 400){
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    }
    const scrollTo = () => {
        window.scrollTo({
            top:0, 
            behavior:'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll',toggleVisibility);
        return () => {
            window.removeEventListener('scroll',toggleVisibility);
        }
    },[]);

    return (
        <div>
            {isVisible && (
                <button onClick={scrollTo} className='scroll-top'>
                    <FaArrowUp/>
                </button>
            )}

        </div>
    )
}

export default ScrollToTop