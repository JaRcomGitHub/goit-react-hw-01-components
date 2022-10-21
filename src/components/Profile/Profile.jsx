import PropTypes from 'prop-types';
import { WrapperProfile, Description, Image, UserName, InfoStats, InfoStatsItem, InfoStatsLabel, InfoStatsQuantity } from './Profile.styled';

//src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" def
export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <WrapperProfile>
            <Description>
                <Image
                    src={ avatar }
                    alt="User avatar"
                    className="avatar"
                />
                <UserName>{ username }</UserName>
                <p className="tag">{ tag }</p>
                <p className="location">{ location }</p>
            </Description>

            <InfoStats>
                <InfoStatsItem>
                    <InfoStatsLabel>Followers</InfoStatsLabel>
                    <InfoStatsQuantity>{ stats.followers }</InfoStatsQuantity>
                </InfoStatsItem>
                <InfoStatsItem>
                    <InfoStatsLabel>Views</InfoStatsLabel>
                    <InfoStatsQuantity>{ stats.views }</InfoStatsQuantity>
                </InfoStatsItem>
                <InfoStatsItem>
                    <InfoStatsLabel>Likes</InfoStatsLabel>
                    <InfoStatsQuantity>{ stats.likes }</InfoStatsQuantity>
                </InfoStatsItem>
            </InfoStats>
        </WrapperProfile>
    );
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string, 
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    })
};
