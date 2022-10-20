import { FriendListItem } from "../FriendListItem/FriendListItem";
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map((item) => (
                <FriendListItem key={item.id}
                    avatar={item.avatar}
                    name={item.name}
                    isOnline={item.isOnline}
                />
            ))}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
    }))
};