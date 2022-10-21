import { Profile } from "./Profile/Profile";
import user from './user.json';

import { Statistics } from "./Statistics/Statistics";
import data from './data.json';

import { FriendList } from "./FriendList/FriendList";
import friends from "./friends.json";

import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from "./transactions.json";

export const App = () => {
  return (
    <>
      <div>        --- 1 ---      </div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <div>        --- 2 ---      </div>
      <TransactionHistory items={transactions} />
      <img src="https://textbook.edu.goit.global/lms-react-homework/v1/img/hw-01/transactions.jpg" alt="dbg" />
      <div>        --- 3 ---      </div>
      <img src="https://textbook.edu.goit.global/lms-react-homework/v1/img/hw-01/friend-list.jpg" alt="dbg" />
      <FriendList friends={friends} />;
      <div>        --- 4 ---      </div>
      <img src="https://textbook.edu.goit.global/lms-react-homework/v1/img/hw-01/statistics.jpg" alt="dbg" />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </>
  );
};
