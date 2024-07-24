import {useState} from 'react';
import style from './style.module.css';
import {IconToggle} from './IconToggle';
import {IDefaultCardProps} from '../../types';

export const QuestionCard = ({title, text}: IDefaultCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button className={style.wrapper} onClick={toggleCard}>
      <div className={style.header}>
        <p className={style.title}>{title}</p>
        <IconToggle isOpen={isOpen} />
      </div>
      {isOpen && <div className={style.content}>{text}</div>}
    </button>
  );
};
