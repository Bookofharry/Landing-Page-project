import lady from './unsplash_PK_t0Lrh7MM.png'
import people from './Group 2185.png'
import './HeroFolder.css'
import { BsFillPlayFill } from "react-icons/bs";
function HeroFolder() {
    return(
        <div className="Grid1">
            <div>
                <span className='Bigword'>Design Impactful Digital</span> <span className='Bigword1'>Products</span>
                <p className='Solutions'>Help find solutions with intitutive and in accordance with client business goals. we provide a high-quality services.</p>
                <div className='Grid2'>
                    <p className='Contact'>Contact Us</p>
                    <button className='Buttn'><BsFillPlayFill className='Font1' /></button>
                    <p className='Watch'>Watch our introduction video</p>
                </div>
            </div>
            <div Grid3>
             <img className='Lady' src={lady} ></img>
             <img className='People' src={people} ></img>
            
            </div>
        </div>
    )
}

export default HeroFolder;