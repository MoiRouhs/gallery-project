import React from 'react';
import imgZatoichi from '../images/zatoichi.jpg';

const Zatoichi = ({ argClass })=>{
    return(
        <div>
           <img className={ argClass } alt="caratula pelicula Zatoichi" src={imgZatoichi}/>          
        </div>
    );
};

export default Zatoichi;
