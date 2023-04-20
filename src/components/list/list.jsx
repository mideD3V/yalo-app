import React from 'react'
import './list.css'
const List = () => {
  return (
    <section id="list">
      <p className="list_sub">Do you have some idle tools & equipment?</p>
      <p className='list_par'>
        You can make some extra income by renting out your idle equipment to
        people who need them
      </p>
      <button className='list_btn'>List an item for rent</button>
    </section>
  );
}

export default List