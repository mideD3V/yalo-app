import React from 'react'
import './equipment.css'

import Truck from '../../Asset/equipment/chiller.png'
import Screen from '../../Asset/equipment/screen.png'
import AudioSystem from '../../Asset/equipment/audio-system.png'




const  Equipment = () => {
  return (
    <section id="equipment">
      <div className="equipment_sub">Equipment for special events</div>

      <div className="cards">
        <div className="card">
          <img src={Truck} alt="" />
          <div className="item_title">Urban Chiller Trucks</div>
          <div className="item_price">N650/Hr</div>
          <div className="item_location">Lagos, NG</div>
        </div>
        <div className="card">
          <img src={Screen} alt="" />
          <div className="item_title">Large display screen</div>
          <div className="item_price">N650/Hr</div>
          <div className="item_location">Lagos, NG</div>
        </div>
        <div className="card">
          <img src={AudioSystem} alt="" />
          <div className="item_title">Sound and audio systems </div>
          <div className="item_price">N650/Hr</div>
          <div className="item_location">Lagos, NG</div>
        </div>
      </div>

      <span className='see_more'>See more</span>
    </section>
  );
}

export default Equipment