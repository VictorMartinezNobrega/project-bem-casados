import React from 'react';
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
          <button>
            button1
          </button>
          <button>
            button2
          </button>
          <button>
            button3
          </button>
          <button>
            button4
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar;