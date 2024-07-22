import style from './style.module.css';
import {Navigation, TextHeader} from '../../components';

export const Header = () => {
  return (
    <div className={style.backgound}>
      <div className={style.overlay}></div>
      <Navigation />
      <header className={style.header}>
        <TextHeader />
      </header>
    </div>
  );
};
