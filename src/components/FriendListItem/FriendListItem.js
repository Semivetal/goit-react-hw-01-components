import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.isOnline : styles.isOffline}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;

/* Компонент должен принимать несколько пропов:
avatar - ссылка на аватар
name - имя друга
isOnline - буль сигнализирующий о состоянии друга, в сети или нет.
В зависимости от пропа isOnline, должен меняться цвет фона span.status. 
Это можно сделать через разный CSS-класс или Styled Components.
Компонент должен создавать DOM следующей структуры. */
