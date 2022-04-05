import PropTypes from 'prop-types';
import { ProfileInfo, ProfilePhoto, ProfileName, ProfileTag, ProfileLocation, ProfileStatistics, StatisticsItem, StatisticsLabel, StatisticsData } from "components/Profile/Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
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
          <StatisticsData> {stats.followers}</StatisticsData>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsLabel>Views</StatisticsLabel>
          <StatisticsData> {stats.views}</StatisticsData>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsLabel>Likes</StatisticsLabel>
          <StatisticsData> {stats.likes}</StatisticsData>
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
};