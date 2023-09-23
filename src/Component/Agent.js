import { NavLink } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import './compo.css';

function Agent() {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <div>
            <div className="servic-area">
                <div className="container">
                    <div className="breadcrumb pt-75 pb-75">
                        <div className="row">
                            <div className="col">
                                <h2>Agent</h2>
                                <ul>
                                    <li><NavLink to="/" className="home-li">Home</NavLink></li>
                                    <li>&#8208;</li>
                                    <li>Agent</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="pt-100 pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="mt-30 first-girl">
                                <div className="agent-image">
                                    <img src="Images/agents-01.webp" alt="" />
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
                                    <img src="Images/agents-03.webp" alt="" />
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
                                    <img src="Images/agents-04.webp" alt="" />
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
                                    <img src="Images/agents-05.webp" alt="" />
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
                                    <img src="Images/agents-06.webp" alt="" />
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
                                    <img src="Images/agents-07.webp" alt="" />
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
                                    <img src="Images/agents-08.webp" alt="" />
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
                                    <img src="Images/agents-09.webp" alt="" />
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
                                    <img src="Images/agents-10.webp" alt="" />
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
                                    <img src="Images/agents-11.webp" alt="" />
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
                                    <img src="Images/agents-12.webp" alt="" />
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
                                    <img src="Images/agents-03.webp" alt="" />
                                </div>
                                <div className="agent-cont">
                                    <h4>Jassica Thomson</h4>
                                    <p>Real Estate Agent</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-100 mt-30">
                <div className="container">
                    <div className="paginat">
                        <Pagination>
                        <Pagination.Prev />{items}<Pagination.Next />
                        </Pagination>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Agent;