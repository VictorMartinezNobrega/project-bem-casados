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
    "https://via.placeholder.com/800x600.png?text=Imagem+1",
    "https://via.placeholder.com/800x600.png?text=Imagem+2",
    "https://via.placeholder.com/800x600.png?text=Imagem+3",
    "https://via.placeholder.com/800x600.png?text=Imagem+4",
    "https://via.placeholder.com/800x600.png?text=Imagem+5",
    "https://via.placeholder.com/800x600.png?text=Imagem+6",
    "https://via.placeholder.com/800x600.png?text=Imagem+7",
    "https://via.placeholder.com/800x600.png?text=Imagem+8",
    "https://via.placeholder.com/800x600.png?text=Imagem+9",
    "https://via.placeholder.com/800x600.png?text=Imagem+10",
    "https://via.placeholder.com/800x600.png?text=Imagem+11",
  ];

  const [isVisible, setIsVisible] = useState(false);

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

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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