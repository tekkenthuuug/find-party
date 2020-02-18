import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import SideBar from '../SideBar/SideBar';
import TopBar from '../TopBar/TopBar';

interface INavigation {
  userID: string;
  setUser: ({ username, id }: { username: string; id: string }) => void;
}

const Navigation: React.FC<INavigation> = ({ userID, setUser }) => {
  const [drawerOpened, setDrawerOpened] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawerOpened(open);
  };

  return userID ? (
    <div style={{ flexGrow: 1 }}>
      <SideBar userID={userID} drawerOpened={drawerOpened} toggleDrawer={toggleDrawer} />
      <TopBar userID={userID} setUser={setUser} toggleDrawer={toggleDrawer} />
    </div>
  ) : (
    <nav>
      <div className="nav__account">
        {[
          { path: '/register', content: 'Register' },
          { path: '/login', content: 'Sign in' }
        ].map((link, index) => {
          return (
            <Link to={link.path} key={index}>
              <div>{link.content}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default React.memo(Navigation);
