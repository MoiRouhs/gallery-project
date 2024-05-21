import React from 'react';
import imgHanaBi from '../images/hana-bi.jpg';

const HanaBi = ({argClass})=>{
    return(
        <div>
           <img className={argClass} alt="caratula pelicula Hana-bi" src={imgHanaBi} />          
        </div>
    );
};

export default HanaBi;
