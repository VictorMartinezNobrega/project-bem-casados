import React from 'react';
import SlideShow from '../../components/SlideShow';
import Banner from '../../components/Banner';
import Budget from '../../components/Budget';
import Contact from '../../components/Contact';
import { ChevronUpIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import "./styles.scss";

const index = () => {
  
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className='div-home-master'>
      <SlideShow />
      <Banner />
      <Budget />
      <Contact />
      
      <Button onClick={goTop}
      className='button-to-top' variant='outline' colorScheme='pink' 
      position={'fixed'} top={'80%'} right={'1%'} width={'40px'} height={'40px'}
      >
        <ChevronUpIcon h={5}/>
      </Button>
    </div>
  )
}

export default index;