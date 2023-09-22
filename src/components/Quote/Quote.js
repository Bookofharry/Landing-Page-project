import './Quote.css';
import Dot from '../Dot/Dot';
import Fifth from './Fifthpic.png'
import Fourth from'./Fourthpic.png'
import Third from './Thirdpic.png'
import Second from './Secondpic.png'
import First from './Firstpic.png'
function Quote(){
    return(
        <div>        
            <div className='Gridd1'>
                <Dot />
                <div className='Gridd3'>
                    <h1>
                  Let’s Hear <pre>    
                    What They Says</pre>
                    </h1> 

                </div>
            </div>

            <div className='Gridd4'>

                <div className='Strong'>
                    <strong className='Strong1'>,,</strong>
                </div>


                <div>
                 <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                 </p>
                 <strong className='Strong2'>,,</strong>
                </div>

            </div>
            
            <div className='Gridd5'>
                <div className='Gridd6'>
                    <img className='Pic1 Pic' src={First}></img>
                    <img className='Pic2 Pic' src={Second}></img>
                    <div className='Divv'>
                    <img className='Pic3 Pic' src={Third}></img>
                    <p className='Para'>Ricky Aprilia</p>
                    <p className='Para1'>Founder of Varibo</p>
                    </div>
                    <img className='Pic4 Pic' src={Fourth}></img>
                    <img className='Pic5 Pic' src={Fifth}></img>
                </div>
                <div>
                    <Dot />
                </div>
            </div>

        </div>
            
    )
}
export default Quote;