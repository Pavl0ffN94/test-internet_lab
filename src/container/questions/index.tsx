import {QuestionCard} from '../../components';
import {questionsData} from '../../mock';
import style from './style.module.css';

export const Questions = () => {
  return (
    <section className={style.section}>
      <h2 className={style.title}> Вопросы и ответы</h2>
      {questionsData.map(quest => (
        <div className={style.questList}>
          <QuestionCard text={quest.text} title={quest.title} key={quest.title} />
        </div>
      ))}
    </section>
  );
};
