import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Card, CardHeader, CardBody, Stack, Link, Box, Heading } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import './styles.scss';

const index = () => {
  return (
    <div className='div-contact-master'>
      <div className='div-contact'>
        <Box border={2} borderColor={'red'} w={'100%'}>
          <Card
            border={'2px'}
            borderColor={'#a36483'}
            bgColor={"#ffdcfe"}
            align={'center'}
          >
            <CardHeader>
              <Heading size='4xl'>Entre em contato!</Heading>
            </CardHeader>
            <CardBody>
              <Stack display={'flex'} direction='row' alignItems={'center'}>
                <FaWhatsapp size={25}  />
                <Link className='link' href='http://api.whatsapp.com/send?1=pt_BR&phone=5513981483289' isExternal>
                  Whatsapp
                  <ExternalLinkIcon h={3} />
                </Link>
                <FaFacebook size={25} />
                <Link className='link' href='https://www.facebook.com/vanessamartinez.bemcasados' isExternal>
                  Facebook
                  <ExternalLinkIcon h={3} />
                </Link>
                <FaInstagram size={25} />
                <Link className='link' href='https://www.instagram.com/vanessam_bemcasadosemacarons/' isExternal>
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

export default index;