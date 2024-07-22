import style from './style.module.css';
interface ICardHowItWork {
  img: string;
  text: string;
}

export const CardHowItWork = ({img, text}: ICardHowItWork) => {
  return (
    <div className={style.wrapperCard}>
      <img className={style.img} src={img} alt={text} />
      <p className={style.text}>{text}</p>
    </div>
  );
};
