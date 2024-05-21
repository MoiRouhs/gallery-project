import React from 'react';
import imgBrother from '../images/brother.webp';

const Brother = ({ argClass })=>{
    return(
        <div>
           <img className={argClass} alt="caratula pelicula Brother" src={imgBrother} />         
        </div>
    );
};

export default Brother;
