import style from './style.module.css';

import {BurgerMenu} from '../burgerMenu';
import {LogoSvg} from '../../assets/Logo';

export const Navigation = () => {
  return (
    <div className={style.navContainer}>
      <a className={style.logo} href='/'>
        <LogoSvg color={'#fff'} />
      </a>

      <nav>
        <ul className={style.navList}>
          <li>
            <a href='#howItWork'>Как это работает</a>
          </li>
          <li>
            <a href='#thirdSection'>3-й блок</a>
          </li>
          <li>
            <a href='#question'>Вопросы и ответы</a>
          </li>
          <li>
            <a href='#form'>Форма</a>
          </li>
        </ul>
        <div className={style.burgerBtn}>
          <BurgerMenu />
        </div>
      </nav>
    </div>
  );
};
