import React from 'react';
import beach from '../images/beach.jpeg';
import lake from '../images/lake.jpeg';
import parachute from '../images/parachute.jpeg';
import { FaHeart, FaParachuteBox, FaSnowflake} from "react-icons/fa";

const Card = (props) => {
  return (
    <div className='card'  >
        <img src={beach} className='beach'/>
        <div>
            <FaHeart color='red'/>
           <span> 5.0</span>
            <span>* Beach</span> 
        </div> 
        <p>This is a beautiful place to enjoy.</p>
        <img src={lake} className='lake'/>
        <div>
            <FaSnowflake color='blue'/>
           <span> 5.0</span>
            <span> * Lake</span> 
        </div>
        <p>What an amazing view. </p>
        <img src={parachute} className='parachute'/>
        <div>
            <FaParachuteBox color='orange'/>
           <span>5.0</span>
            <span> * Skydiving.</span> 
        </div>
        <p>Flying <span className='bold'>parachute  </span>is super fun. </p>
    </div>
  );
};
 
export default Card;
