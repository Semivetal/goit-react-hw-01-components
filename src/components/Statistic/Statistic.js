import PropTypes from "prop-types";
import styles from "./Statistic.module.css";

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={styles.item}
            key={id}
            style={{ backgroundColor: setRandomBgC() }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function setRandomBgC() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistics;

/* Создать компонет < Statistics >, который бы отображал статистику по переданным пропам.
К примеру загрузки в облако по типу файлов, посещение веб - страницы пользователями 
разных стран, финансовые траты и т.п.Данные о статистике лежат в файле statistical - data.json.

Компонент должен принимать два пропа title и stats, в которых указывается заголовок 
и объект статистики.

title - не обязателен, и если он не передан, не должна рендериться разметка заголовка <h2>.
    stats - массив объектов содержащих информацию о элементе статистики. 
Может иметь произвольное кол - во элементов.
Цвет фона элемента статистики в оформлении можно пропустить, либо создать функцию для 
генерации случайного цвета. Компонент должен создавать DOM элемент следующей структуры. */

/* 
<Statistics title="Upload stats" stats={statisticalData} />;
<Statistics stats={statisticalData} />; 
*/
