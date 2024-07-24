import {ArticleCard} from '../../components';
import {articlesData} from '../../mock';
import style from './style.module.css';

export const Articles = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        {articlesData.map((article, index) => (
          <div className={style.articleList} key={index}>
            <ArticleCard text={article.text} title={article.title} />
          </div>
        ))}
      </div>
    </section>
  );
};
