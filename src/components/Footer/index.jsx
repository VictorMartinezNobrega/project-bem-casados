import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import "./styles.scss";

const Footer = () => {
  return (
    <div className='div-footer-master'>
      <div className='div-footer'>
        <div className='div-logo'>
          <img src="./img/logo-bc2.png" alt="segunda-logo" />
        </div>
        <div className='div-links'>
          <div className='div-facebook'>
            <FaFacebook /> <a href='https://www.facebook.com/vanessamartinez.bemcasados' target="blank">Facebook</a>
          </div>
          <div className='div-instagram'>
            <FaInstagram /> <a href='https://www.instagram.com/vanessam_bemcasadosemacarons/' target="blank">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;