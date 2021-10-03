import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';


const useStyles = makeStyles({
  list: {
    textAlign: "right",
    padding: "10vh 50px",
    width: 250,
    height: "100vh",
    background: "black",
    color: "white",

  },
  p: {
    borderBottom: "1px solid #3d3d3d",
    paddingTop: "20px",
    cursor: "pointer",
    '&:hover': {
      color: "#7d7d7d",
      transition: "0.5s ease"
    }
  },
  fullList: {
    width: 'auto',
  },
});

export default function Sidebar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List >

        <p className="close-arrow"><i className="fas fa-times"></i></p>
        <p className={clsx(classes.p)}>MISSIONS</p>
        <p className={clsx(classes.p)}>LAUNCHES</p>
        <p className={clsx(classes.p)}>CAREERS</p>
        <p className={clsx(classes.p)}>UPDATES</p>
        <p className={clsx(classes.p)}>SHOP</p>

      </List>

    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <p onClick={toggleDrawer(anchor, true)}><i className="fas fa-bars"></i></p>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
