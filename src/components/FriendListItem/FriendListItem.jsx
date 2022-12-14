import PropTypes from 'prop-types';
import { ListItem, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <ListItem>
            <Status style={{background: isOnline ? "green" : "red"}} />
            <Avatar src={ avatar } alt="User avatar" width="48" />
            <Name>{ name }</Name>
        </ListItem>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};