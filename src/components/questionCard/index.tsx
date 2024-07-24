import {useState} from 'react';
import style from './style.module.css';
import {IconToggle} from './IconToggle';

export const QuestionCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.wrapper} onClick={toggleCard}>
      <div className={style.header}>
        Частокол на границе продолжает удивлять?
        <IconToggle isOpen={isOpen} />
      </div>
      {isOpen && (
        <div className={style.content}>
          В частности, дальнейшее развитие различных форм деятельности позволяет выполнить
          важные задания по разработке дальнейших направлений развития. Предварительные
          выводы неутешительны: экономическая повестка сегодняшнего дня говорит о
          возможностях существующих финансовых и административных условий.
        </div>
      )}
    </div>
  );
};
