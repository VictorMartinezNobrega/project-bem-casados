import React from 'react';
import Banner from '../../components/Banner';
import Contact from '../../components/Contact';
import "./styles.scss";

const index = () => {
  return (
    <div className='div-home-master'>
      <Banner />
      <Contact />
    </div>
  )
}

export default index;