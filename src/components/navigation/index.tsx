import style from './style.module.css';
import logo from '../../assets/logo.svg';

export const Navigation = () => {
  return (
    <div className={style.navContainer}>
      <a className={style.logo} href='/'>
        <img src={logo} />
      </a>

      <nav>
        <ul className={style.navList}>
          <li>
            <a>Как это работает</a>
          </li>
          <li>
            <a>3-й блок</a>
          </li>
          <li>
            <a>Вопросы и ответы</a>
          </li>
          <li>
            <a>Форма</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
