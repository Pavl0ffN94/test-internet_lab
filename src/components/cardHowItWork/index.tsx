import style from './style.module.css';
interface ICardHowItWork {
  img: string;
  text: string;
  title: string;
}

export const CardHowItWork = ({img, text, title}: ICardHowItWork) => {
  return (
    <div className={style.wrapperCard}>
      <img className={style.img} src={img} alt={text} />
      <div className={style.textWrapper}>
        <p className={style.title}>{title}</p>
        <p className={style.text}>{text}</p>
      </div>
    </div>
  );
};
