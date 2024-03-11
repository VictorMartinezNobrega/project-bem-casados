import { useState, useEffect } from 'react';
import SlideShow from '../../components/SlideShow';
import Banner from '../../components/Banner';
import Budget from '../../components/Budget';
import Contact from '../../components/Contact';
import { ChevronUpIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import "./styles.scss";

const Home = () => {

  const images = [
    //"./img/carrosel1.jpg",
    //"./img/carrosel2.jpg",
    //"./img/carrosel3.jpg",
    //"./img/carrosel4.jpg",
    //"./img/carrosel5.jpg",
    //"./img/carrosel6.jpg",
    //"./img/carrosel7.jpg",
    //"./img/carrosel8.jpg",
    "./img/carrosel9.jpg",
    //"./img/carrosel10.jpg",
    "./img/carrosel11.jpg",
    "./img/carrosel12.jpg",
    "./img/carrosel13.jpg",
  ];

  const [isVisible, setIsVisible] = useState(false);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset < 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 

  return (
    <div className='div-home-master'>
      <SlideShow images={images} />
      <Banner />
      <Budget />
      <Contact />

      <Button onClick={goTop}
        className={`button-to-top ${isVisible ? 'show' : ''}`}
        variant='outline' colorScheme='pink'
        position={'fixed'} top={'80%'} right={'1%'} width={'40px'} height={'40px'}
      >
        <ChevronUpIcon h={5} />
      </Button>
    </div>
  )
}

export default Home;