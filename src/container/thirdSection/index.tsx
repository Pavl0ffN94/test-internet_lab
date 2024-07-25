import {sectionThirdImg} from '../../assets';
import {ISectionProps} from '../../types';
import style from './style.module.css';

export const ThirdSection = ({id}: ISectionProps) => {
  return (
    <section id={id} className={style.section}>
      <div className={style.textWrapper}>
        <h5 className={style.title}>Круто, ты дошел до третьего блока</h5>
        <p className={style.paragraphOne}>
          63% опрошенных пользовались кредитами из-за того, что не могли покрыть
          непредвиденные расходы свыше 15 000 ₽.
        </p>
        <p className={style.paragraphTwo}>
          Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги
          на процентах и штрафах.
        </p>
      </div>
      <div className={style.imgWrapper}>
        <img className={style.img} src={sectionThirdImg} alt='3 section img' />
      </div>
    </section>
  );
};
