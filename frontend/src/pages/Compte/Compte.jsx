import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userData } from '../../helpers';
import "./Compte.scss"
// import CommandeDetail from '../../components/Profile/CommandeDetail';


const Compte = () => {
    
    

    const navigate = useNavigate(); 


    const deconecter= ()=>{  
        localStorage.setItem("user", "");
        navigate("/login")
      
}
const {username}= userData()

const [open,setOpen] = useState(false)

  return (
    <div className='compte'>
       <div className="main1">
          <div className='menu-container'>
                <button  onClick={()=> setOpen(!open)} className='link'> Votre compte KinStore</button>
                <button   className='link'>Vos commandes</button>
                <button   className='link'>Votre liste d'envie</button>
                <button   className='link'>Vus récemment</button>
                <button   className='menu-logout' onClick={deconecter}>Se deconnecter</button>     
          
          </div>
        </div>

        <div className="main2">
            <h2>Bienvenue <span> {username}</span> </h2>
          <div>
            {/* {open && <CommandeDetail/>} */}
          </div>
        </div>
    </div>
  )
};

export default Compte


