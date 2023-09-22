import logo from './poweerlogo.png'
import './Header.css'


function Header(){
  // function Homeclick(){
    
  // }
    return(
            <div className='Divfirst'>
              <ol className='Navbar'>
              <li>
                <img className='Power' src={logo} ></img>
              </li>
              <li >
                Home
              </li>
              <li>
                About Us
              </li>
              <li>
                Services
              </li>
              <li>
                Products
              </li>
              </ol>
            </div>
    )
}
export default Header;