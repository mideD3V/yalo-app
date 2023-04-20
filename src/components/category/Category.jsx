import React from 'react'
import './category.css'

import Bicycle from '../../Asset/category/bike.png'
import Construction from '../../Asset/category/construction.png'
import Custume from '../../Asset/category/costume.png'


const Category = () => {
  return (
    <section id="category">
      <p className="category_sub">Browse by category</p>{" "}
      <div className="category_cards">
        <div className="category_card">
          <img src={Bicycle} alt="" />
          <span className="gradient_overlay"> </span>
          <p className="card_label">Bikes & Mini vehicles</p>
        </div>

        <div className="category_card">
          <img src={Construction} alt="" />
          <span className="gradient_overlay"> </span>
          <p className="card_label">Construction equipment</p>
        </div>

        <div className="category_card">
          <img src={Custume} alt="" />
          <span className="gradient_overlay"> </span>
          <p className="card_label">Costume & Clothings</p>
        </div>
      </div>
      <div className="explore">Explore all</div>
    </section>
  );
}

export default Category