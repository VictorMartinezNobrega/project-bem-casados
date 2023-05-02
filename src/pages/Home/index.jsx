import { useState, useEffect } from 'react';
import SlideShow from '../../components/SlideShow';
import Banner from '../../components/Banner';
import Budget from '../../components/Budget';
import Contact from '../../components/Contact';
import { ChevronUpIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import "./styles.scss";

const Home = () => {

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
      <SlideShow />
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