import React, {  useEffect, useState } from 'react'

import { Link} from 'react-router-dom';
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { userData } from '../../helpers';
// import { useSelector } from 'react-redux';

const Navbar = () => {
 


  const [open,setOpen] = useState(false)
  // const products = useSelector (state=>state.cart.products);
  // const navigate = useNavigate()
  // const [user, setUser] = useState(false)
  // const [name, setName] = useState('')

  const [username, setUsername]= userData();
  useEffect( ()=>{
    axios.get("http://localhost:1337")
    .then(res => {

        setUsername( res.data.username); 
 
     }
   )
   .catch(err => console.log(err) )

 
  })


  return (
    <div className='navbar'>
      <div className='wrapper_top'>

        <div className='left'>
          <Link className="link" to="/"><img src="./img/logo.png" alt="" srcset="" /><span>Book</span> </Link>
        </div>
        
        <div className="center-container">

       <div className="center">
      
        <input type="search" 
         placeholder='Que recherchez-vous ?'
       
        />
    
          <button><FontAwesomeIcon icon={ faMagnifyingGlass} /></button>

       </div>
        </div>

        
        <div className="icons">
        <FontAwesomeIcon icon={ faHeart} style={{color:"red"}} /><p>Favoris</p>      
        {
          username? ( 
            <Link to="/profile">{username}</Link>

          ) : (

           <Link to="/login" className='link'>
              <FontAwesomeIcon icon={ faUser} style={{color:" #7baead"}} /><p>Compte</p>
            </Link>
          )
        }
          
          <div className="cartIcon" onClick={()=> setOpen(!open)}>
          <FontAwesomeIcon icon={faCartShopping}style={{color:" #7baead"}} /> <p> Panier</p>
            {/* <span>{ products.length} </span> */}
          </div>
        </div>

     
  
      </div>



  

   
 
     
       {open && <Cart/>}
    </div>
  )
}

export default Navbar

