import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Card, CardHeader, CardBody, Stack, Link, Box, Heading, } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import './styles.scss';

const Contact = () => {
  return (
    <div className='div-contact-master'>
      <div className='div-contact'>
        <Box w={'100%'}>
          <Card
            border={'2px'}
            borderColor={'#a36483'}
            bgColor={"#ffdcfe"}
            align={'center'}
          >
            <CardHeader>
              <Heading fontSize={'4.5vw'}>Entre em contato!</Heading>
            </CardHeader>
            <CardBody>
              <Stack display={'flex'} direction='row' alignItems={'center'} >
                <FaWhatsapp size={25}  />
                <Link className='link' 
                href='http://api.whatsapp.com/send?1=pt_BR&phone=5513981483289' fontSize={'1.7vw'} isExternal>
                  Whatsapp
                  <ExternalLinkIcon h={3} />
                </Link>
                <FaFacebook size={25} />
                <Link className='link' 
                href='https://www.facebook.com/vanessamartinez.bemcasados' fontSize={'1.7vw'} isExternal>
                  Facebook
                  <ExternalLinkIcon h={3} />
                </Link>
                <FaInstagram size={25} />
                <Link className='link' 
                href='https://www.instagram.com/vanessam_bemcasadosemacarons/' fontSize={'1.7vw'} isExternal>
                  Instagram
                  <ExternalLinkIcon h={3}/>
                </Link>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      </div>
    </div>
  )
}

export default Contact;