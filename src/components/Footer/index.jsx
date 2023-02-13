import { Box, Text } from '@chakra-ui/react';
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
        <Box m={'auto'} ml={'10px'}>
          <Text fontSize={'1vw'} color={'white'}>Praia Grande - SP / &#40;13&#41; 98148-3289</Text>
        </Box>
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