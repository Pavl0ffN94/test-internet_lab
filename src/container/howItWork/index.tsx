import {CardHowItWork} from '../../components/cardHowItWork';
import {howItWorkData} from '../../mock';
import style from './style.module.css';

export const HowItWork = () => {
  return (
    <section className={style.section}>
      <h2 className={style.title}> Как это работает</h2>
      <div className={style.cardList}>
        {howItWorkData.map(stage => (
          <CardHowItWork
            img={stage.img}
            text={stage.text}
            title={stage.title}
            key={stage.title}
          />
        ))}
      </div>
    </section>
  );
};
