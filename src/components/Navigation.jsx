import React from 'react';
import { Link } from 'react-router-dom';

import Brother from './Brother';
import Dolls from './Dolls';
import HanaBi from './HanaBi';
import ViolentCop from './ViolentCop';
import Zatoichi from './Zatoichi';

const Navigation = ()=>{
    return(
        <div>
          <Link to="/brother">
            <figure>
              <Brother/>
              <fogcaption>Brother</fogcaption>
            </figure>
          </Link>
          <Link to="/dolls">
            <figure>
              <Dolls/>
              <fogcaption>Dolls</fogcaption>
            </figure>
          </Link>
          <Link to="/hanabi">
            <figure>
              <HanaBi/>
              <fogcaption>Hana-bi</fogcaption>
            </figure>
          </Link>
          <Link to="/violentcop">
            <figure>
              <ViolentCop/>
              <fogcaption>Violent Cop</fogcaption>
            </figure>
          </Link>
          <Link to="/zatoichi">
            <figure>
              <img alt="" src={Zatoichi} />
              <fogcaption>Zatoichi</fogcaption>
            </figure>
          </Link>
        </div>
    );
};

export default Navigation;
