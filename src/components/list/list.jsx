import React from 'react'
import { Link } from 'react-router-dom';
import './list.css'
const List = () => {
  return (
    <section id="list">
      <p className="list_sub">Do you have some idle tools & equipment?</p>
      <p className="list_par">
        You can make some extra income by renting out your idle equipment to
        people who need them
      </p>
      <Link to='/list'>
        <button className="list_btn">List an item for rent</button>
      </Link>
    </section>
  );
}

export default List