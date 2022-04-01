import { Profile } from 'components/Profile/Profile';
import user from '../components/Profile/user.json';
import { Statistics } from 'components/Statistics/Statistics';
import data from '../components/Statistics/data.json';

export const App = () => {
  return (
    <
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   textTransform: 'uppercase',
      //   color: '#010101',
      // }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
