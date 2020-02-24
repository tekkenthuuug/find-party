import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import SettingsApplicationsRoundedIcon from '@material-ui/icons/SettingsApplicationsRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { ILink } from '../../types/types';

interface IDrawer {
  userID: string;
  drawerOpened: boolean;
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent<Element> | React.MouseEvent<Element, MouseEvent>) => void;
}

const useStyles = makeStyles({
  list: {
    width: 250
  },
  paper: {
    backgroundColor: 'rgb(52, 52, 61)',
    color: 'white'
  }
});

const SideBar: React.FC<IDrawer> = ({ userID, drawerOpened, toggleDrawer }) => {
  const classes = useStyles();

  const SideLinks: Array<ILink> = [
    {
      title: 'My profile',
      path: '/users/' + userID,
      icon: <AccountCircleRoundedIcon style={{ color: 'white' }} />
    },
    { title: 'Feed', path: '/feed', icon: <DynamicFeedIcon style={{ color: 'white' }} /> },
    { title: 'Create event', path: '/events/create', icon: <AddCircleIcon style={{ color: 'white' }} /> },
    { title: 'Settings', path: '/settings', icon: <SettingsApplicationsRoundedIcon style={{ color: 'white' }} /> }
  ];

  const sideList = () => (
    <div className={classes.list} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {SideLinks.map((item) => (
          <NavLink to={item.path} key={item.title} activeStyle={{ color: '#b1b1c7' }}>
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer open={drawerOpened} onClose={toggleDrawer(false)} classes={{ paper: classes.paper }}>
      {sideList()}
    </Drawer>
  );
};

export default SideBar;
