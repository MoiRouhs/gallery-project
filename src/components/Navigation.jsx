import React from 'react';
import { Link } from 'react-router-dom';

import Brother from './Brother';
import Dolls from './Dolls';
import HanaBi from './HanaBi';
import ViolentCop from './ViolentCop';
import Zatoichi from './Zatoichi';

const Navigation = ()=>{
    return(
        <div className="relative m-5 z-10 grid gap-3">
          <Link to="/brother" className="text-center">
            <figure className="max-w-20">
              <Brother argClass='rounded-xl shadow-lg shadow-black hover:sepia'/>
              <fogcaption className="hidden">Brother</fogcaption>
            </figure>
          </Link>
          <Link to="/dolls" className="text-center">
            <figure className="max-w-20">
              <Dolls argClass='rounded-xl  shadow-lg shadow-black hover:sepia'/>
              <fogcaption className="hidden">Dolls</fogcaption>
            </figure>
          </Link>
          <Link to="/hanabi" className="text-center">
            <figure className="max-w-20">
              <HanaBi argClass='rounded-xl shadow-lg shadow-black hover:sepia'/>
              <fogcaption className="hidden">Hana-bi</fogcaption>
            </figure>
          </Link>
          <Link to="/violentcop" className="text-center">
            <figure className="max-w-20">
              <ViolentCop argClass='rounded-xl shadow-lg shadow-black hover:sepia'/>
              <fogcaption className="hidden">Violent Cop</fogcaption>
            </figure>
          </Link>
          <Link to="/zatoichi" className="text-center">
            <figure className="max-w-20">
              <Zatoichi argClass='rounded-xl shadow-lg shadow-black hover:sepia'/>
              <fogcaption className="hidden">Zatoichi</fogcaption>
            </figure>
          </Link>
        </div>
    );
};

export default Navigation;
