import './compo.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaLongArrowAltLeft } from 'react-icons/fa';

function Slider()
{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 576, min: 0 },
          items: 1
        }
      };
    return(
        <>
        <div className="slider-part">
            <div className='testimonials-bg'>
                <Carousel responsive={responsive}>
                    <div className='first-item'>
                        <div className='first-caro'>
                            <div className='testi-author'>
                                <div className='image-auth'>
                                    <img src='Images/outher-02.webp' alt=''/>
                                </div>
                                <div className='author-info'>
                                    <h4>Zakuline Fernandez </h4>
                                    <p>CEO, Momens Group</p>
                                </div>
                            </div>
                            <div className='author-dec'>
                                <p>one of the most popular real estate company all around USA. You can find your dream property or the build erty with us. We always provide importance</p>
                            </div>
                        </div>
                    </div>
                    <div className='first-item'>
                        <div className='first-caro'>
                            <div className='testi-author'>
                                <div className='image-auth'>
                                    <img src='Images/outher-02.webp' alt=''/>
                                </div>
                                <div className='author-info'>
                                    <h4>Zakuline Fernandez </h4>
                                    <p>CEO, Momens Group</p>
                                </div>
                            </div>
                            <div className='author-dec'>
                                <p>one of the most popular real estate company all around USA. You can find your dream property or the build erty with us. We always provide importance</p>
                            </div>
                        </div>
                    </div>
                    <div className='first-item'>
                        <div className='first-caro'>
                            <div className='testi-author'>
                                <div className='image-auth'>
                                    <img src='Images/outher-02.webp' alt=''/>
                                </div>
                                <div className='author-info'>
                                    <h4>Zakuline Fernandez </h4>
                                    <p>CEO, Momens Group</p>
                                </div>
                            </div>
                            <div className='author-dec'>
                                <p>one of the most popular real estate company all around USA. You can find your dream property or the build erty with us. We always provide importance</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='first-item'>
                        <div className='first-caro'>
                            <div className='testi-author'>
                                <div className='image-auth'>
                                    <img src='Images/outher-02.webp' alt=''/>
                                </div>
                                <div className='author-info'>
                                    <h4>Zakuline Fernandez </h4>
                                    <p>CEO, Momens Group</p>
                                </div>
                            </div>
                            <div className='author-dec'>
                                <p>one of the most popular real estate company all around USA. You can find your dream property or the build erty with us. We always provide importance</p>
                            </div>
                        </div>
                    </div>
                    
                </Carousel>
            </div>
        </div>
        </>
    )
}
export default Slider;