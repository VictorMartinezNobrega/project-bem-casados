import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import "./styles.scss";

const Footer = () => {
  return (
    <div className='div-footer-master'>
      <div className='div-footer'>
        <div className='div-logo'>
          <img src="./img/logo-bc2.png" alt="segunda-logo" />
        </div>
        <Box m={'auto'} ml={'10px'}>
          <Text fontSize={'15px'} color={'white'}>Praia Grande - SP / &#40;13&#41; 98148-3289</Text>
        </Box>
      </div>
    </div>
  )
}

export default Footer;