import style from './style.module.css';

interface ISliderCard {
  img: string;
  fio: string;
  city: string;
  text: string;
  id?: number;
}

export const SliderCard = ({city, fio, img, text}: ISliderCard) => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <img className={style.avatar} src={img} alt={fio} />
        <div className={style.personInfo}>
          <span className={style.fio}>{fio}</span>
          <span className={style.city}>{city}</span>
        </div>
      </div>
      <p className={style.text}>{text}</p>
    </div>
  );
};
