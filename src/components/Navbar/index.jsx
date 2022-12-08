import React from 'react';
import { Button } from '@chakra-ui/react';
import "./styles.scss";

const NavBar = () => {
  return (
    <div className='div-navbar-master'>
      <div className='div-navbar'>
        <div className='div-logo'>
          <img src="./img/logo-bem-casados.jpg" alt="logo-bem-casados" />
        </div>
        <div className='div-navigation'>
          {/**Local dos botões de navagação */}
          <Button className='button'>
            <p className='p'>Orçamento</p>
          </Button>
          <Button className='button' >
            <p className='p'>Contato</p>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NavBar;