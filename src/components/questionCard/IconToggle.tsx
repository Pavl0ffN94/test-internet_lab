import style from './style.module.css';

interface IconToggleProps {
  isOpen: boolean;
}

export const IconToggle = ({isOpen}: IconToggleProps) => {
  return (
    <div className={`${style.icon} ${isOpen ? style.open : ''}`}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={style.svgIcon}>
        {isOpen ? (
          <>
            <line x1='18' y1='6' x2='6' y2='18' />
            <line x1='6' y1='6' x2='18' y2='18' />
          </>
        ) : (
          <>
            <line x1='12' y1='5' x2='12' y2='19' />
            <line x1='5' y1='12' x2='19' y2='12' />
          </>
        )}
      </svg>
    </div>
  );
};
