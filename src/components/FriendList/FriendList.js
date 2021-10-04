import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
/*
Необходимо создать компонент <FriendList>, с помощью которого мы могли бы 
отображать информацию о друзьях пользователя. Информация о друзьях хранится в файле 
friends.json.

Компонент должен принимать один проп friends - массив объектов друзей.
Компонент должен создавать DOM следующей структуры.
*/

/*
<ul class="friend-list">
  <!-- Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в массиве -->
</ul>

<FriendList friends={friends} />,
*/
