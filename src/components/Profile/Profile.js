import PropTypes from "prop-types";
import styles from "./Profile.module.css";

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;

/* Необходимо создать компонент < Profile >, с помощью которого мы могли бы отображать
информацию о пользователе социальной сети.Данные о пользователе лежат в файле user.json.

Компонент должен принимать несколько пропсов с информацией о пользователе:
name — имя пользователя
tag — тег в социальной сети без @
location — город и страна
avatar — url на изображение
stats — объект с информацией об активности
Компонент должен создавать DOM элемент следующей структуры. */
