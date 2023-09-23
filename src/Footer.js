import './ortiz.css'
import {Button, Form} from 'react-bootstrap';
import { BiLogoTelegram } from 'react-icons/bi';
import { TfiLocationPin } from 'react-icons/tfi';
import { LiaPhoneVolumeSolid } from 'react-icons/lia';
import { IoEarth } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

function Footer()
{
    return(
        <div>
            <div className="footer pt-60 pb-100">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-sm-6 col-coustom-3'>
                            <div className='mt-40 footer-info'>
                                <div className='footer-title'>
                                    <h3>About</h3>
                                </div>
                                <div className='footer-text'>
                                    <p>Ortiz is the best and popular real estate to you how all this mistaolt cing pleasure and praising ained wasnad pain was prexplain</p>
                                    <div className='news-box'>
                                        <Form>
                                            <Form.Control type="email" placeholder="Email for Newsletter" autoComplete='off' className='newsr' />
                                            <Button className='btunimag'><BiLogoTelegram/></Button>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6 col-coustom-3'>
                            <div className='mt-40 footer-info'>
                                <div className='footer-title'>
                                    <h3>Popular Post</h3>
                                </div>
                                <div className='footer-text'>
                                    <div className='single-lis'>
                                        <h4>Duplex Villa Design</h4>
                                        <p>Lorem ipsum dolor sit amet, tur acinglit sed do eius</p>
                                    </div>
                                    <div className='single-lis'>
                                        <h4>Duplex Villa Design</h4>
                                        <p>Lorem ipsum dolor sit amet, tur acinglit sed do eius</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6 col-coustom-3'>
                            <div className='mt-40 footer-info'>
                                <div className='footer-title'>
                                    <h3>Quick Link</h3>
                                </div> 
                                <div className='footer-text'>
                                    <ul>
                                        <li><NavLink className="footer-nav">Sercives</NavLink></li>
                                        <li><NavLink className="footer-nav">Agent</NavLink></li>
                                        <li><NavLink className="footer-nav">Properties</NavLink></li>
                                        <li><NavLink className="footer-nav">Features</NavLink></li>
                                        <li><NavLink className="footer-nav">Contact</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6 col-coustom-3'>
                            <div className='mt-40 footer-info'>
                                <div className='footer-title'>
                                    <h3>Contact Us</h3>
                                </div>
                                <div className='footer-text'>
                                    <ul>
                                        <li>
                                            <div className='last-cont'>
                                                <div className='loca'><TfiLocationPin/></div>
                                                <p>256, 1st AVE, Manchester <br/> 125 , Noth England</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='last-cont'>
                                                <div className='loca'><LiaPhoneVolumeSolid/></div>
                                                <p>Telephone : <br/> +88 (012) 356 958 45 <br/> Telephone : <br/> +88 (012) 356 958 45</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='last-cont'>
                                                <div className='loca'><IoEarth/></div>
                                                <p>Email : info@example.com <br/> Web : www.example.com</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='foot-bottom'>
                <div className='container'>© 2023 Copyright HasThemes. All rights reserved.</div>
            </div>
        </div>
    )
}
export default Footer;