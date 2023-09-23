import { NavLink } from 'react-router-dom';
import './compo.css';

function Features()
{
    return(
        <div>
        <div className="servic-area">
            <div className="container">
                <div className="breadcrumb pt-75 pb-75">
                    <div className="row">
                        <div className="col">
                            <h2>Features</h2>
                            <ul>
                                <li><NavLink to="/" className="home-li">Home</NavLink></li>
                                <li>&#8208;</li>
                                <li>Features</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="pt-100">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-5">
                            <div className="choose-prop">
                                <div className="choose-provide">
                                    <span className="discount">35% Discount</span>
                                    <div className="image-1">
                                        <img src="Images/choose-02.webp" alt=""/>
                                        <div className="price-boxes">
                                            <p>Price $1,53,000</p>
                                        </div>
                                    </div>
                                    <div className="image-2">
                                        <img src="Images/choose-01.webp" alt=""/>
                                        <div className="price-boxes">
                                            <p>Price $1,53,000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                        <div className="about-cont">
                                <h2>We never compromize<br/>with quality work...</h2>
                                <p>Ortiz is one of the most popular real estate company all around USA. You can find your dream property or build property</p>
                                <div className="row gy-4">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="about-feature">
                                            <div className="icon">
                                                <img src="Images/feature-5.webp" alt=""/>
                                            </div>
                                            <div className="conte">
                                                <h4>Royel touch paint</h4>
                                                <p>Paint is the mirron of beautifull house build property with us</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="about-feature">
                                            <div className="icon">
                                                <img src="Images/feature-6.webp" alt=""/>
                                            </div>
                                            <div className="conte">
                                                <h4>Fully Furnished</h4>
                                                <p>Well decorated and fully fuhed properties is available for all</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="about-feature">
                                            <div className="icon">
                                                <img src="Images/feature-7.webp" alt=""/>
                                            </div>
                                            <div className="conte">
                                                <h4>Latest Interior design</h4>
                                                <p>All interior are latest and luxus miron of beauty</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="about-feature">
                                            <div className="icon">
                                                <img src="Images/feature-8.webp" alt=""/>
                                            </div>
                                            <div className="conte">
                                                <h4>Non stop security</h4>
                                                <p>Security in our property area is the main priority for our all</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='many-logo pt-100 pb-100'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                    <ul>
                        <li><img src='Images/01 (1).webp' alt=''/></li>
                        <li><img src='Images/02 (1).webp' alt=''/></li>
                        <li><img src='Images/03 (1).webp' alt=''/></li>
                        <li><img src='Images/04 (1).webp' alt=''/></li>
                        <li><img src='Images/05 (1).webp' alt=''/></li>
                    </ul>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
export default Features;