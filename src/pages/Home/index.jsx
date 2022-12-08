import React from 'react';
import Banner from '../../components/Banner';
import Budget from '../../components/Budget';
import Contact from '../../components/Contact';
import "./styles.scss";

const index = () => {
  return (
    <div className='div-home-master'>
      <Banner />
      <Budget />
      <Contact />
    </div>
  )
}

export default index;