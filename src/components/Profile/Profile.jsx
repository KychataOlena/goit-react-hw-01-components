import PropTypes from 'prop-types';

import {
  ProfileCard,
  Description,
  Logo,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Quantity,
  StatsList,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <Description>
        <Logo>
          <Avatar src={avatar} alt="User avatar" Avatar />
        </Logo>

        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsList>
          <span className="label">Followers</span>
          <Quantity>{followers}</Quantity>
        </StatsList>
        <StatsList>
          <span className="label">Views</span>
          <Quantity>{views}</Quantity>
        </StatsList>
        <StatsList>
          <span className="label">Likes</span>
          <Quantity>{likes}</Quantity>
        </StatsList>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
