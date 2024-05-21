import React from 'react';
import imgDolls from '../images/dolls.jpg';

const Dolls = ({argClass})=>{
    return(
        <div>
          <img className={argClass} alt="caratula pelicula dolls" src={imgDolls} />
        </div>
    );
};

export default Dolls;
