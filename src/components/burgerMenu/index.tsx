import {useState} from 'react';
import Modal from 'react-modal';
import style from './style.module.css';
import {LogoSvg} from '../../assets/Logo';
Modal.setAppElement('#root');

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className={`${style.burgerButton} ${isOpen ? style.open : ''}`}
        onClick={toggleModal}>
        <span className={`${style.line} ${style.top}`}></span>
        <span className={`${style.line} ${style.bottom}`}></span>
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        className={style.modal}
        overlayClassName={style.overlay}>
        <div className={style.menuHeader}>
          <a className={style.logo} href='/'>
            <LogoSvg color={'#000'} />
          </a>
        </div>
        <ul className={style.menuList}>
          <li>
            <a href='#'>Как это работает</a>
          </li>
          <li>
            <a href='#'>3-й блок</a>
          </li>
          <li>
            <a href='#'>Вопросы и ответы</a>
          </li>
          <li>
            <a href='#'>Форма</a>
          </li>
        </ul>
      </Modal>
    </div>
  );
};
