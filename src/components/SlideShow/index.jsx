import React from 'react';
import Carousel from '@itseasy21/react-elastic-carousel';

const SlideShow = ({ images }) => {

  const carouselRef = React.useRef(null);
  let resetTimeout;

  return (
    <Carousel
      ref={carouselRef}
      itemsToShow={1}
      showArrows={true}
      enableMouseSwipe={true}
      pagination={false}
      enableAutoPlay={true}
      onNextEnd={({ index }) => {
        if (index === images.length - 1) {
          clearTimeout(resetTimeout);
          resetTimeout = setTimeout(() => {
            carouselRef?.current?.goTo(0);
          }, 1000); // same time
        }
      }}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} disabled={true} alt={`Image ${index}`} />
        </div>
      ))}
    </Carousel>
  )
}

export default SlideShow;