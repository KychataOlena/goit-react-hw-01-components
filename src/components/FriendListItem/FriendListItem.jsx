import { FriendStatus, FriendName, FriendImage } from './FriendListItem.styled';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

// import { theme } from 'styles/theme';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <Fragment>
      <>
        <FriendStatus status={isOnline}></FriendStatus>
        <FriendImage src={avatar} alt="User avatar" width="48" />
        <FriendName>{name}</FriendName>
      </>
    </Fragment>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
