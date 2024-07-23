import {CustomSlider} from '../../components';
import style from './style.module.css';

export const Feedback = () => {
  return (
    <section className={style.section}>
      <h2 className={style.title}>Отзывы</h2>
      <CustomSlider />
    </section>
  );
};
