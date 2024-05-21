import React from 'react';
import imgViolentCop from '../images/violent-cop.jpg';

const ViolentCop = ({ argClass })=>{
    return(
        <div>
          <img className={ argClass } alt="caratula pelicula Violent Cop" src={imgViolentCop} />  
        </div>
    );
};

export default ViolentCop;
