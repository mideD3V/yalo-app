import React from 'react'
import Header from '../nav/Header'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom'
import './list.css'
import { BsChevronLeft} from 'react-icons/bs'
const ListItem = () => {
  return (
    <div>
      <Header />

      <div id="list_body">
        <Link to="/" className="back_home">
          {" "}
          <BsChevronLeft /> Back home
        </Link>
        <div className="steps">
          <p >Set up your store in 3 steps</p>
        </div>
        <prog>
          <div className="prog_ball">1</div>
          <span className="prog_bar"></span>
          <div className="prog_ball"></div>
          <span className="prog_bar"></span>
          <div className="prog_ball"></div>
        </prog>
      </div>
      <Footer />
    </div>
  );
}

export default ListItem