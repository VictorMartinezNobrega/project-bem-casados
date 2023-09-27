import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const images = [
  'https://picsum.photos/400/300?random=1',
  'https://picsum.photos/400/300?random=2',
  'https://picsum.photos/400/300?random=3',
  'https://picsum.photos/400/300?random=4',
  'https://picsum.photos/400/300?random=5',
  'https://picsum.photos/400/300?random=6',
  'https://picsum.photos/400/300?random=7',
  'https://picsum.photos/400/300?random=8',
  'https://picsum.photos/400/300?random=9',
  'https://picsum.photos/400/300?random=10',
  'https://picsum.photos/400/300?random=11',
];

const Carousel = () => {
  return (
    <Box position="relative">
      {images.map((imageUrl, index) => (
        <motion.div
          key={index}
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            height: '400px',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      ))}
    </Box>
  );
};

export default Carousel;