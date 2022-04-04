import PropTypes from 'prop-types';
import { AllFriends, Friend, Status, FriendPhoto, FriendName } from "components/FriendList/FriendList.styled";

export const FriendList = ({ friends }) => {
    return (
        <div>
            <AllFriends>
                {friends.map(({ id, name, avatar, isOnline }) => (
                    <Friend key={id}>
                        <Status isOnline={isOnline}>{isOnline}</Status>
                        <FriendPhoto src={avatar} alt="User avatar" width="48" />
                        <FriendName>{name}</FriendName>
                    </Friend> 
                ))}
            </AllFriends>
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