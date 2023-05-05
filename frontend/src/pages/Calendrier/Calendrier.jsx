import React, { useState } from 'react'
import './Calendrier.scss'
import {  useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { userData } from '../../helpers';


const init = {  
  email:"",
  username:"",
  title:"",
  debut:"",
  retour:""
}
const Calendrier = () => {
  const products = useSelector((state) => state.cart.products);
  
const [book, setBook] = useState(init)
    
  

    const hanndleClick = async(e)=>{
      e.preventDefault();
    
      fetch(`${process.env.REACT_APP_API_URL}/calendars`, {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({data:book})
      })
      .then((res) => {
       console.log(res)
        toast(`Prenez une capture de la confirmation du reservation ${username}`, {
          autoClose: 8000,
          position: toast.POSITION.TOP_CENTER
      });
       toast(`votre reservation à été accepter veuillez passer à Mit pour récuperer un livre en donnant 
       votre identité merci de nous faire confiance ${username} 
        Remarque: veuillez passer à MIT a la date prévue pour votre reservation sinon votre reservation sera annuler `, {
          autoClose: 20000,
          position: toast.POSITION.TOP_CENTER,
          className: 'toast-message'
      });
      })
    }
const {username}= userData()
  return (
  <div className='calendrier'>
       <h3>salut <span>{username}</span> vous pouvez completé ces informations pour faire une reservation</h3>
      <div className='calendar-container'>
            <div className='user'>

            <form className="login_form" action=""  onSubmit={hanndleClick}   >
      
             <input
               type="text"
               name="username"
              //  onChange={handleChange} 
              value={book.username}  
              onChange={e => setBook({...book, username: e.target.value})}
               placeholder="your name"
             />
              <input
                  type="email"
                  name="email"  
                  // onChange={handleChange}
                  value={book.email}
                  onChange={e => setBook({...book, email: e.target.value})}
                  placeholder="your email"
               />
               
               <input
                  type="text"
                  name="title"  
                  // onChange={handleChange}
                  value={book.title}
                  onChange={e => setBook({...book, title: e.target.value})}
                  placeholder="nom du produit"
               />
                 <label htmlFor="">la date  de l'emprunt du livre: </label>
             
               <input type="date" 
                  name="debut"  
                  // onChange={handleChange}
                  value={book.debut}
                  onChange={e => setBook({...book, debut: e.target.value})}

               />
               <label htmlFor="">la date de retour de l'emprunt du livre :</label>
               <input type="date" 
                  name="retour"  
                  // onChange={handleChange}
                  value={book.retour}
                  onChange={e => setBook({...book, retour: e.target.value})}

               />
                 <button  className='button'>reserver</button>

          </form>

         </div>
            <div className='product_main'>
              {products?.map((item) => (
               <div className="item_main" key={item.id}>
                 <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
                 <div className="detail_main">
                   <h1   > {item.title }</h1>
                 
                    <p>{item.desc?.substring(0, 100)}</p>
                 </div>
                
               </div>
             ))}
            </div>
        </div>
  </div>
  )
}

export default Calendrier