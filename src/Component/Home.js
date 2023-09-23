import React, { useEffect } from "react";
import './compo.css';
import {NavLink} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "./Slider";
function Home()
{
    useEffect(()=>
    {
        AOS.init();
        AOS.refresh();
    }, []);
    return(
        <div className="home-section">
            <div className="slick-list">
                <div className="homeback">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-8">
                                <div className="home-cont" data-aos="flip-up" data-aos-duration="2000">
                                    <h1>Desilva De Villa</h1>
                                    <h3>24 North Street, California, USA</h3>
                                    <p>3520 sqft, 5 Bed, 3 Bath, 2 Garage</p>
                                    <h2>For Sale $54,000</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="pt-100 pt-md-80 pt-sm-60">
                <div className="container">
                    <div className="row gy-5 d-flex justify-content-between align-items-center">
                        <div className="col-lg-4 col-md-5 offset-lg-1">
                            <div className="proper-area">
                                <img src="Images/about-1.webp" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="about-cont">
                                <h2>We never compromize<br/>with quality work...</h2>
                                <p>Ortiz is one of the most popular real estate company all around USA. You can find your dream property or build property</p>
                                <div className="row gy-4">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="about-feature">
                                            <div className="icon">
                                                <img src="Images/feature-1.webp" alt=""/>
                                            </div>
                                            <div className="conte">
                                                <h4>Minimum Cost</h4>
                                                <p>Privide low cost that help all more build real estate</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="about-feature">
                                            <div className="icon">
                                                <img src="Images/feature-2.webp" alt=""/>
                                            </div>
                                            <div className="conte">
                                                <h4>Best Marketing</h4>
                                                <p>Privide low cost that help all more build real estate</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="about-feature">
                                            <div className="icon">
                                                <img src="Images/feature-3.webp" alt=""/>
                                            </div>
                                            <div className="conte">
                                                <h4>Easy to Search</h4>
                                                <p>Privide low cost that help all more build real estate</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="about-feature">
                                            <div className="icon">
                                                <img src="Images/feature-4.webp" alt=""/>
                                            </div>
                                            <div className="conte">
                                                <h4>Secure</h4>
                                                <p>Privide low cost that help all more build real estate</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-100 pt-md-80 pt-sm-60">
                <div className="container">
                    <div className="prop-sale text-center mb-30">
                        <h2>Property for Sale</h2>
                        <p>one of the most popular real estate company all around USA. You<br/>
can find your dream property or build property with us</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-prop mt-30">
                                <div className="prop-img">
                                    <NavLink className="img-item"><img src="Images/01.webp" alt=""/></NavLink>
                                    <span className="for-rent">FOR RENT</span>
                                </div>
                                <div className="mari">
                                    <h4><NavLink className="maric">Mariyasa de Casel</NavLink></h4>
                                    <p>22 First street, Chicago, USA 1200 Sqft, 3 Bed, 2 Bath, 1 Garage</p>
                                    <div className="price-box">
                                        <p>Price $1,25,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-prop mt-30">
                                <div className="prop-img">
                                    <NavLink className="img-item"><img src="Images/02.webp" alt=""/></NavLink>
                                </div>
                                <div className="mari">
                                    <h4><NavLink className="maric">Rose de Alfanez</NavLink></h4>
                                    <p>22 First street, Chicago, USA 1200 Sqft, 3 Bed, 2 Bath, 1 Garage</p>
                                    <div className="price-box">
                                        <p>Price $70,250</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-prop mt-30">
                                <div className="prop-img">
                                    <NavLink className="img-item"><img src="Images/03.webp" alt=""/></NavLink>
                                    <span className="for-rent1">FOR RENT</span>
                                </div>
                                <div className="mari">
                                    <h4><NavLink className="maric">La Casanda Villa</NavLink></h4>
                                    <p>22 First street, Chicago, USA 1200 Sqft, 3 Bed, 2 Bath, 1 Garage</p>
                                    <div className="price-box">
                                        <p>Price $1,50,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-prop mt-30">
                                <div className="prop-img">
                                    <NavLink className="img-item"><img src="Images/04.webp" alt=""/></NavLink>
                                </div>
                                <div className="mari">
                                    <h4><NavLink className="maric">Rainforest de Olive</NavLink></h4>
                                    <p>22 First street, Chicago, USA 1200 Sqft, 3 Bed, 2 Bath, 1 Garage</p>
                                    <div className="price-box">
                                        <p>Price $92,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-prop mt-30">
                                <div className="prop-img">
                                    <NavLink className="img-item"><img src="Images/05.webp" alt=""/></NavLink>
                                </div>
                                <div className="mari">
                                    <h4><NavLink className="maric">Mariyasa de Casel</NavLink></h4>
                                    <p>22 First street, Chicago, USA 1200 Sqft, 3 Bed, 2 Bath, 1 Garage</p>
                                    <div className="price-box">
                                        <p>Price $1,90,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-prop mt-30">
                                <div className="prop-img">
                                    <NavLink className="img-item"><img src="Images/06.webp" alt=""/></NavLink>
                                    <span className="for-rent1">FOR RENT</span>
                                </div>
                                <div className="mari">
                                    <h4><NavLink className="maric">Mariyasa de Casel</NavLink></h4>
                                    <p>22 First street, Chicago, USA 1200 Sqft, 3 Bed, 2 Bath, 1 Garage</p>
                                    <div className="price-box">
                                        <p>Price $70,250</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-prop mt-30">
                                <div className="prop-img">
                                    <NavLink className="img-item"><img src="Images/07.webp" alt=""/></NavLink>
                                </div>
                                <div className="mari">
                                    <h4><NavLink className="maric">Mariyasa de Casel</NavLink></h4>
                                    <p>22 First street, Chicago, USA 1200 Sqft, 3 Bed, 2 Bath, 1 Garage</p>
                                    <div className="price-box">
                                        <p>Price $2,25,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-prop mt-30">
                                <div className="prop-img">
                                    <NavLink className="img-item"><img src="Images/08.webp" alt=""/></NavLink>
                                </div>
                                <div className="mari">
                                    <h4><NavLink className="maric">Mariyasa de Casel</NavLink></h4>
                                    <p>22 First street, Chicago, USA 1200 Sqft, 3 Bed, 2 Bath, 1 Garage</p>
                                    <div className="price-box">
                                        <p>Price $1,05,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
            <section className="pt-100 pt-md-80 pt-sm-60">
                <div className="container">
                    <div className="prop-sale text-center mb-30">
                        <h2>Property for Rent</h2>
                        <p>one of the most popular real estate company all around USA. You<br/>
can find your dream property or build property with us</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-prop mt-30">
                                <div className="prop-img">
                                    <NavLink className="img-item"><img src="Images/01.webp" alt=""/></NavLink>
                                    <span className="for-rent">FOR RENT</span>
                                </div>
                                <div className="mari">
                                    <h4><NavLink className="maric">Mariyasa de Casel</NavLink></h4>
                                    <p>22 First street, Chicago, USA 1200 Sqft, 3 Bed, 2 Bath, 1 Garage</p>
                                    <div className="price-box">
                                        <p>Price $ 1,59,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-prop mt-30">
                                <div className="prop-img">
                                    <NavLink className="img-item"><img src="Images/02.webp" alt=""/></NavLink>
                                </div>
                                <div className="mari">
                                    <h4><NavLink className="maric">Rose de Alfanez</NavLink></h4>
                                    <p>22 First street, Chicago, USA 1200 Sqft, 3 Bed, 2 Bath, 1 Garage</p>
                                    <div className="price-box">
                                        <p>Price $ 1,59,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-prop mt-30">
                                <div className="prop-img">
                                    <NavLink className="img-item"><img src="Images/03.webp" alt=""/></NavLink>
                                    <span className="for-rent1">FOR RENT</span>
                                </div>
                                <div className="mari">
                                    <h4><NavLink className="maric">La Casanda Villa</NavLink></h4>
                                    <p>22 First street, Chicago, USA 1200 Sqft, 3 Bed, 2 Bath, 1 Garage</p>
                                    <div className="price-box">
                                        <p>Price $2,32,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-prop mt-30">
                                <div className="prop-img">
                                    <NavLink className="img-item"><img src="Images/04.webp" alt=""/></NavLink>
                                </div>
                                <div className="mari">
                                    <h4><NavLink className="maric">Rainforest de Olive</NavLink></h4>
                                    <p>22 First street, Chicago, USA 1200 Sqft, 3 Bed, 2 Bath, 1 Garage</p>
                                    <div className="price-box">
                                        <p>Rent $32,00/m</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-100 ortiz-banner">
                <div className="container">
                    <div className="banner-inner-box">
                        <img src="Images/banner-01.webp" alt=""/>
                    </div>
                </div>
            </section>
            <section className="our-agent pt-100 pb-100">
                <div className="container">
                    <div className="prop-sale text-center mb-30">
                        <h2>Our Agents</h2>
                        <p>one of the most popular real estate company all around USA. You<br/>can find your dream property or build property with us</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="mt-30 first-girl">
                                <div className="agent-image">
                                    <img src="Images/agents-01.webp" alt=""/>
                                </div>
                                <div className="agent-cont">
                                    <h4>Jassica Thomson</h4>
                                    <p>Real Estate Agent</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="mt-30 first-girl">
                                <div className="agent-image">
                                    <img src="Images/agents-06.webp" alt=""/>
                                </div>
                                <div className="agent-cont">
                                    <h4>Thomas Eilliams</h4>
                                    <p>Real Estate Agent</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="mt-30 first-girl">
                                <div className="agent-image">
                                    <img src="Images/agents-03.webp" alt=""/>
                                </div>
                                <div className="agent-cont">
                                    <h4>Sayana Sarlin</h4>
                                    <p>Real Estate Agent</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="mt-30 first-girl">
                                <div className="agent-image">
                                    <img src="Images/agents-04.webp" alt=""/>
                                </div>
                                <div className="agent-cont">
                                    <h4>Kuddus Boyati</h4>
                                    <p>Real Estate Agent</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="latest-blog pb-100">
                <div className="container">
                    <div className="prop-sale text-center mb-30">
                        <h2>Latest Blog Post</h2>
                        <p>one of the most popular real estate company all around USA. You<br/>
can find your dream property or build property with us</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-latest mt-30">
                                <div className="latest-image">
                                    <img src="Images/blog-s-01.webp" alt=""/>
                                </div>
                                <div className="latest-blog-cont">
                                    <h4><NavLink className="duplex">Duplex Appartment Latest Design</NavLink></h4>
                                    <p>May 10, 2019 / 10 pm</p>
                                    <p>Real estate festival is one of the famous feval for explain to you how all this mistaolt deand praising pain wasnad I will give complete</p>
                                    <NavLink className="read-more">Read More</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <div className="single-latest mt-30">
                                <div className="latest-image">
                                    <img src="Images/blog-s-02.webp" alt=""/>
                                </div>
                                <div className="latest-blog-cont">
                                    <h4><NavLink className="duplex">Real Estate Fesitval - 2020</NavLink></h4>
                                    <p>May 08, 2019 / 03 pm</p>
                                    <p>Real estate festival is one of the famous feval for explain to you how all this mistaolt deand praising pain wasnad I will give complete</p>
                                    <NavLink className="read-more">Read More</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <div className="single-latest mt-30">
                                <div className="latest-image">
                                    <img src="Images/blog-s-03.webp" alt=""/>
                                </div>
                                <div className="latest-blog-cont">
                                    <h4><NavLink className="duplex">Latest Architectural Real Estate</NavLink></h4>
                                    <p>May 10, 2019 / 4 pm</p>
                                    <p>Real estate festival is one of the famous feval for explain to you how all this mistaolt deand praising pain wasnad I will give complete</p>
                                    <NavLink className="read-more">Read More</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home;