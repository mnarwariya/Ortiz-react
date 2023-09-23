import './ortiz.css';
import {NavLink} from 'react-router-dom';
function Topnav()
{
    return(
        <div className="header-top">
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-6'>
                        <div className='header-info'>
                            Call us - <NavLink className='num'>21548 987 658</NavLink>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                        <div className='header-btn'>
                            <NavLink className='header-btns'>Add Property</NavLink>
                            <NavLink className='reg'>Register</NavLink>
                            <NavLink className='log'>Login</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Topnav;