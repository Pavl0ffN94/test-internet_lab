import {IDefaultCardProps} from '../../types';
import style from './style.module.css';

export const ArticleCard = ({title, text}: IDefaultCardProps) => {
  return (
    <div className={style.wrapper}>
      <span className={style.title}>{title}</span>
      <p className={style.text}>{text}</p>
    </div>
  );
};
