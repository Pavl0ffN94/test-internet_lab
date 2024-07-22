import style from './style.module.css';

export const TextHeader = () => {
  return (
    <div className={style.textWrapper}>
      <h1 className={style.title}>
        Говорят, никогда не поздно <br /> сменить профессию
      </h1>
      <p className={style.desc}>Сделай круто тестовое задание и у тебя получится</p>
      <button className={style.btn}>Проще простого!</button>
    </div>
  );
};
