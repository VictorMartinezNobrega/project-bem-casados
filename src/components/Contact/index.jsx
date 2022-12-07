import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Card, CardBody } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';

import './styles.scss';

const index = () => {
  return (
    <div className='div-contact-master'>
      <div className='div-contact'>
        <div className='div-space'>
          <div className='div-whats'>
            <h1>Entre em contato!</h1>
            <div className='div-icon-whats'>
              <FaWhatsapp /> <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5513981483289" target="blank">Whatsapp</a>
            </div>
          </div>
          <Card>
            <CardBody bgColor={"green"}>
              <h1>Entre em contato!</h1>
              <Stack display={'flex'} direction='row'>
                <FaWhatsapp /><a href="http://api.whatsapp.com/send?1=pt_BR&phone=5513981483289" target="blank">Whatsapp</a>
              </Stack>
            </CardBody>
          </Card>
          <div className='div-social'>
            <h1>Conheça o meu trabalho!</h1>
            <FaFacebook /> <a href='https://www.facebook.com/vanessamartinez.bemcasados' target="blank">Facebook</a>
            <FaInstagram /> <a href='https://www.instagram.com/vanessam_bemcasadosemacarons/' target="blank">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index;