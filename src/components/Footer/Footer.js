import Img from './Group 2183.png';
import Git from './Git.png'
import Insta from './Insta.png';
import Face from './Face.png';
import Twit from './Twit.png';
import './Footer.css';
function Footer(){
    return(
        <div className='Divided'>
            <div className='Flexdiv'>
                <div>
                    <img src={Img} className='Imgg'></img>
                </div>
                <div>
                    <img src={Insta} className='Imgg1'></img>
                    <img src={Face} className='Imgg1'></img>
                    <img src={Twit} className='Imgg1'></img>
                    <img src={Git} className='Imgg1'></img>
                    <img src={Insta} className='Imgg1'></img>
                </div>
            </div>

            <div className='Footerdiv'>
                <div className='Innerdiv'></div>
                <br></br>
                <p className='Com'>Company</p>
                <div className='Lastdiv'>
                    <ol className='listun'>
                        <li className='mainli'>About Us</li>
                        <li className='mainli'>Press</li>
                        <li className='mainli'>Investors</li>
                        <li className='mainli'>Events</li>
                        <li className='mainli'>Terms of use</li>
                        <li className='mainli'>Privacy policy</li>
                        <li className='Lastcon'>Contact Us</li>
                    </ol>
                    <br></br>
                    <p className='copy'>&copy; power 2023 - All Rights Reserved</p> 
                    <br></br>
                    
                </div>
                
                
            </div> 
        </div>
    )
}
export default Footer;