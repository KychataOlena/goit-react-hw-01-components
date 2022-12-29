import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Friends, FriendItem } from './FriendList.styled';
// import { Friends } from 'react';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Fragment>
      <Friends>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendItem key={id}>
            <FriendListItem
              avatar={avatar}
              name={name}
              isOnline={isOnline}
              id={id}
              key={id}
            />
          </FriendItem>
        ))}
      </Friends>
    </Fragment>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
