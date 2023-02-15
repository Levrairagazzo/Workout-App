import {Link } from 'react-router-dom'
import Weight from '../assets/weight.png'
const Navbar = () => {
    return ( 
    <header>
        <div className="container">
        <Link to='/'>
            <h1 className='title'>
                Sydney's Workout
            </h1>
        </Link>
        <img src={Weight} alt='dumbbell' className='weigtLogo' width={150} height={100}/>
       
        </div>
    </header> );
}
 
export default Navbar;