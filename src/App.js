import "./App.css";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import Statistics from "./components/Statistic/Statistic";
import TransactionHistory from "./components/Transaction/Transaction";

import transactions from "./data/transaction-history/transactions.json";
import statisticalData from "./data/statistics/statistical-data.json";
import user from "./data/social-profile/user.json";
import friends from "./data/friend-list/friends.json";

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
