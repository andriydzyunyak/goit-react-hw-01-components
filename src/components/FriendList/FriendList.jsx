import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';

export const FriendList = ({friends}) => {
    return (
        <div>
            <ul className={css.friendlist}>
                {friends.map(({ id, name, avatar, isOnline }) => (
                    <li key={id} className={css.item}>
                        <span className={css.status}>{isOnline}</span>
                        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                        <p className={css.name}>{name}</p>
                </li> 
                ))}
            </ul>
        </div>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })),
};