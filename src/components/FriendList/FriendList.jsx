import PropTypes from 'prop-types';
import { Friends } from './FriendList.styled';
import { Friends, FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = friends => {
  return (
    <Friends>
      {friends.map(({ avatar, name, isOnline, id }) => {
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
          key={id}
        />;
      })}
    </Friends>
  );
};
