import {QuestionCard} from '../../components';
import style from './style.module.css';

export const Questions = () => {
  return (
    <section className={style.section}>
      <h2 className={style.title}> Вопросы и ответы</h2>
      <QuestionCard />
    </section>
  );
};
