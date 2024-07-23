import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import style from './style.module.css';
import {feedbackData} from '../../mock';
import {SliderCard} from '../sliderCard';

const responsive = {
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 3,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {max: 581, min: 0},
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {max: 1024, min: 581},
    items: 2,
    partialVisibilityGutter: 30,
  },
};

export const CustomSlider = () => (
  <div className={style.container}>
    <Carousel
      additionalTransfrom={0}
      autoPlaySpeed={3000}
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
