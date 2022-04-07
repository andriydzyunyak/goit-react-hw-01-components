import PropTypes from 'prop-types';
import {
  ProfileInfo,
  ProfilePhoto,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStatistics,
  StatisticsItem,
  StatisticsLabel,
  StatisticsData
} from "components/Profile/Profile.styled";

export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
  return (
    <div>
      <ProfileInfo>
        <ProfilePhoto
          src={avatar}
          alt="User avatar"
        />
        <ProfileName>{username}</ProfileName>
        <ProfileTag> @{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileInfo>

      <ProfileStatistics>
        <StatisticsItem>
          <StatisticsLabel>Followers</StatisticsLabel>
          <StatisticsData> {followers}</StatisticsData>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsLabel>Views</StatisticsLabel>
          <StatisticsData> {views}</StatisticsData>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsLabel>Likes</StatisticsLabel>
          <StatisticsData> {likes}</StatisticsData>
        </StatisticsItem>
      </ProfileStatistics>
    </div>
  )
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }
};