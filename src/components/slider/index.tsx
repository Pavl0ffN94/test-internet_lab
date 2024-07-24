import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import style from './style.module.css';
import {feedbackData} from '../../mock';
import {SliderCard} from '../sliderCard';
import LeftArrowIcon from '../../assets/leftArrow.svg?react';
import RightArrowIcon from '../../assets/rightArrow.svg?react';

interface ArrowProps {
  onClick: () => void;
}

const responsive = {
  desktop: {
    breakpoint: {max: 3000, min: 1094},
    items: 3,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {max: 581, min: 0},
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {max: 1094, min: 581},
    items: 2,
    partialVisibilityGutter: 30,
  },
};

export const CustomSlider = () => {
  const CustomLeftArrow = ({onClick}: ArrowProps) => {
    return (
      <button className={`${style.arrowButton} ${style.arrowLeft}`} onClick={onClick}>
        <LeftArrowIcon />
      </button>
    );
  };

  const CustomRightArrow = ({onClick}: ArrowProps) => {
    return (
      <button className={`${style.arrowButton} ${style.arrowRight}`} onClick={onClick}>
        <RightArrowIcon />
      </button>
    );
  };

  return (
    <div className={style.wrapper}>
      <Carousel
        additionalTransfrom={0}
        autoPlaySpeed={3000}
        centerMode={false}
        customLeftArrow={<CustomLeftArrow onClick={() => {}} />}
        customRightArrow={<CustomRightArrow onClick={() => {}} />}
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
        renderDotsOutside={true}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
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
