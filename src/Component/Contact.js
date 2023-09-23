import { NavLink } from 'react-router-dom';
import './compo.css';
import { TfiLocationPin } from 'react-icons/tfi';
import { FiPhoneCall } from 'react-icons/fi';
import { IoEarth } from 'react-icons/io5';
import { Form,Button } from 'react-bootstrap'
import { useState } from 'react';

function Contact()
{
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[message,setMessage]=useState("");
    const[nerror,setNerror]=useState(false);
    const[eerror,setEerror]=useState(false);
    const[merror,setMerror]=useState(false);
    function formsubmit(event)
    {
        if(name.length<3 || email.length<6 || message.length<8)
        {
            alert("Please right Information");
        }
        else
        {
            alert("all good ):");
        }
        event.preventDefault();
    }
    function namehandler(event)
    {
        let item=event.target.value
        if(item.length<3)
        {
            setNerror(true)
        }
        else
        {
            setNerror(false)
        }
        setName(item)
    }
    function emailhandler(event)
    {
        let item=event.target.value
        if(item.length<6)
        {
            setEerror(true)
        }
        else
        {
            setEerror(false)
        }
        setEmail(item)
    }
    function messagehandler(event)
    {
        let item=event.target.value
        if(item.length<8)
        {
            setMerror(true)
        }
        else
        {
            setMerror(false)
        }
        setMessage(item)
    }
    return(
        <div>
        <div className="servic-area">
            <div className="container">
                <div className="breadcrumb pt-75 pb-75">
                    <div className="row">
                        <div className="col">
                            <h2>Contact us</h2>
                            <ul>
                                <li><NavLink to="/" className="home-li">Home</NavLink></li>
                                <li>&#8208;</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className='contact-section pt-100 pb-100'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='contact-wrap'>
                            <div className='contact-title pb-30'>
                                <h4>GET IN <span>TOUCH</span></h4>
                                <p>Ortiz is the best theme for elit, sed do eiusmod tempor dolor sit ame tse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud exercitation oris nisi</p>
                            </div>
                            <div className='contact-info'>
                                <ul>
                                    <li>
                                        <div className='contact-text'>
                                            <div className='tfiicon'><TfiLocationPin/></div>
                                            <p>256, 1st AVE, Manchester <br/> 125 , Noth England</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='contact-text'>
                                            <div className='tfiicon'><FiPhoneCall/></div>
                                            <p>Telephone :+88 (012) 356 958 45 <br/>Telephone :+88 (012) 356 958 45</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='contact-text'>
                                            <div className='tfiicon'><IoEarth/></div>
                                            <p>Email : info@example.com<br/>Web : www.example.com</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='contact-wrap'>
                            <h4>Leave a Message</h4>
                            <div className='contact-form'>
                                <Form onSubmit={formsubmit}>
                                    <div className='row row-10'>
                                        <div className='col-md-6 col-12 mb-30'>
                                            <Form.Control type="text" placeholder="Your Name" className='inputname' onChange={namehandler}/>{nerror?<span>Username Not Valid</span>:null}
                                        </div>
                                        <div className='col-md-6 col-12 mb-30'>
                                            <Form.Control type="email" placeholder="Email" className='inputname' onChange={emailhandler}/>{eerror?<span>Email Not Valid</span>:null}
                                        </div>
                                        <div className='col-12 mb-30'>
                                            <Form.Control as="textarea" placeholder='Message' className='message-text' onChange={messagehandler}/>{merror?<span>Please right message</span>:null}
                                        </div>
                                        <div className='col-12'>
                                            <Button type='submit' className='send btn btn-circle'>Send</Button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
export default Contact;