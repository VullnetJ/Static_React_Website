
import React from 'react';
import iceland from '../images/iceland.png'
import flowers from '../images/flowers.jpeg'
import puffins from '../images/puffins.jpeg'
import sea from '../images/sea.jpeg'
import wind from '../images/wind-mills.jpeg'

const Hero = () => {
  return (
      <section className='hero'>
          <div id='img-wrapper'>
              <img src={iceland} className='iceland-photo'/>
              <img src={flowers} className='flowers'/>
              <img src={puffins} className='puffins'/>
              <img src={sea} className='sea'/>
              <img src={wind} className='wind'/>
          </div>         
          <h1 className='hero-header'>Online Experience</h1>
          <p className='here-paragraph'>Join unique interactive activities led by our customers</p>
      </section>
  );
};

export default Hero;
