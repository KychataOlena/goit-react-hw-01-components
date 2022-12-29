import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

import user from '../user.json';
import data from '../Data/data.json';
import friends from '../Data/friends.json';
// import { FriendListItem } from './FriendListItem/FriendListItem';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
