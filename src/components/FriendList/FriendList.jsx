import { FriendListItem } from "../FriendListItem/FriendListItem";

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
