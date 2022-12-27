import {
  FriendItem,
  FriendStatus,
  FriendName,
  FriendImage,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendItem key={id}>
      <FriendStatus>{isOnline}</FriendStatus>
      <FriendImage src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};
