import React from "react";
import "./Slider.scss"

const Slider = () => {




  return (
    <div className='slider'>   
       
        <div className="main"style={{background:'rgb(37, 115, 200)'}}>
          <div className="desc">
             <h3>Dernières sorties de nos Bouquin</h3>
             <p>Des Livres  qui sont commander  tous les jours chez nos nouveaux client ! Assurez-vous de nous suivre pour  toutes les nouvelles sorties.</p>
             <button>Voir tous les livres</button>
          </div>
          <div className="images">
            {/* <h3>MitBook</h3> */}
             <img src="./img/silde.jpg"   alt="livre" />
          </div>
        </div>
 
     
    </div>
  )
}

export default Slider
