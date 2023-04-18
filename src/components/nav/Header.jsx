import React from 'react'
import './header.css'
import Yalo from '../../Asset/yalo-logo.png'
import { BsShopWindow } from 'react-icons/bs'
import { BsPerson } from "react-icons/bs";
import { MdOutlineAddBusiness } from "react-icons/md";
import { IoMdNotificationsOutline } from 'react-icons/io'


const Header = () => {
  return (
    <section className="header">
      <div>
        <img src={Yalo} alt="Yalo logo" />
      </div>

      <div className="nav-options">
        <div className="store">
          <BsShopWindow className="icon" />
          <p>My store</p>
        </div>

        <div className="account">
          <BsPerson className="icon" />
          <p>Account</p>
        </div>

        <div className="notification">
          <IoMdNotificationsOutline className="icon" />
          <span className="notify"></span>
        </div>

        <div className="list-btn">
          <MdOutlineAddBusiness className="cart" />
          <button>List an item</button>
        </div>
      </div>
    </section>
  );
}

export default Header