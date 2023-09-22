import './Newsletter.css'
import Mobileapp from './App.png'
import Uii from './Uiux.png'
import Logo from './Logo.png'
import web from './Website.png'
import { MdEmail } from "react-icons/md";

function Newsletter(){
    return(
        <div>
            <div className='Divvv'>

                <div className='Divvv1'>
                    <p className='Help'>How Can We Help You</p>
                    <p className='News'>Follow our newsletter. We will regulary update our latest project and availability.</p>
                    <div className='Butt'> <MdEmail className='Email'> </MdEmail><span className='Addy'>Enter your email address</span><span className='Sub'>Subcribe</span></div>
                </div>
                <div className='Divvv2'>
                    <div>
                        <img src={Uii}></img>
                        <p className='H1'>UI/UX Design</p>
                        <p className='P1'>Sometimes features require a short description</p>
                    </div>
                    <div>
                        <img src={Logo}></img>
                        <p className='H1'>Logo Branding</p>
                        <p className='P1'>Sometimes features require a short description</p>
                    </div>
                    <div>
                        <div className='Butt1'><img src={Mobileapp}className='Mobile'></img></div>
                        <p className='H1'>App Design</p>
                        <p className='P1'>Sometimes features require a short description</p>
                    </div>
                    <div>
                        <img src={web}></img>
                        <p className='H1'>Webiste Design</p>
                        <p className='P1'>Sometimes features require a short description</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Newsletter;