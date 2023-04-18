import React from 'react'
import './popular.css'

import Generator from '../../Asset/popular/generator.png'
import Light from '../../Asset/popular/light.png'
import Camera from '../../Asset/popular/camera.png'
import Mixer from '../../Asset/popular/mixer.png'
import Laptop from '../../Asset/popular/laptop.png'

const Popular = () => {
  return (
    <section id="popular">
      <h3>Popular searches</h3>

      <div className="items">
        <div className="item_1 item">
          <img src={Generator} alt="" />
          <figcaption>Generator</figcaption>
        </div>
        <div className="item_2 item"><img src={Light} alt="" />
          <figcaption>Light</figcaption></div>
        <div className="item_3 item"><img src={Camera} alt="" />
          <figcaption>Camera</figcaption></div>
        <div className="item_4 item"><img src={Mixer} alt="" />
          <figcaption>Concrete Mixer</figcaption></div>
        <div className="item_5 item"><img src={Laptop} alt="" />
          <figcaption>Laptop</figcaption></div>
      </div>
    </section>
  );
}

export default Popular