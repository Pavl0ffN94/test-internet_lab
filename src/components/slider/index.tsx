import React, {useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import style from './style.module.css';
import {feedbackData} from '../../mock';
import {SliderCard} from '../sliderCard';
import {ArrowLeft} from '../../assets/ArrowLeft';
import {ArrowRight} from '../../assets/ArrowRight';

const responsive = {
  desktop: {
    breakpoint: {max: 3000, min: 1070},
    items: 3,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {max: 581, min: 0},
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {max: 1070, min: 581},
    items: 2,
    partialVisibilityGutter: 30,
  },
};

export const CustomSlider = () => {
  const [activeArrow, setActiveArrow] = useState<null | 'left' | 'right'>(null);

  const handleLeftClick = () => {
    setActiveArrow('left');
  };

  const handleRightClick = () => {
    setActiveArrow('right');
  };

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((event.target as Element).closest('.carouselArrow')) {
      return;
    }
    setActiveArrow(null);
  };

  return (
    <div className={style.container} onClick={handleClickOutside}>
      <Carousel
        additionalTransfrom={0}
        autoPlaySpeed={3000}
        customLeftArrow={
          <div className={`${style.carouselArrow} ${style.left}`}>
            <ArrowLeft
              color={activeArrow === 'left' ? '#2A6CEA' : '#C2C8CD'}
              onClick={handleLeftClick}
            />
          </div>
        }
        customRightArrow={
          <div className={`${style.carouselArrow} ${style.right}`}>
            <ArrowRight
              color={activeArrow === 'right' ? '#2A6CEA' : '#C2C8CD'}
              onClick={handleRightClick}
            />
          </div>
        }
        centerMode={false}
        className={style.carousel}
        draggable
        focusOnSelect={false}
        infinite
        itemClass={style.carouselItem}
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        slidesToSlide={1}
        swipeable
        showDots={true}>
        {feedbackData.map(person => (
          <SliderCard
            key={person.id}
            city={person.city}
            fio={person.fio}
            img={person.img}
            text={person.text}
          />
        ))}
      </Carousel>
    </div>
  );
};
