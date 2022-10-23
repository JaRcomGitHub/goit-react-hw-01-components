import { FriendListItem } from "../FriendListItem/FriendListItem";
import PropTypes from 'prop-types';
import { WrapperFriend, FriendListBlock } from './FriendList.styled';


export const FriendList = ({ friends }) => {
    return (
        <WrapperFriend>
            <FriendListBlock>
                {friends.map((item) => (
                    <FriendListItem key={item.id}
                        avatar={item.avatar}
                        name={item.name}
                        isOnline={item.isOnline}
                    />
                ))}
            </FriendListBlock>
        </WrapperFriend>
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