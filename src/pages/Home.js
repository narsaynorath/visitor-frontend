import React from 'react';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
// import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../assets/securitycompass-logo-light.png';

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(40px + 2vmin)',
    marginTop: '30vh',
    marginBottom: '5vh',
    width: '100vw',
  },
  logo: {
    height: '15vh',
  },
  link: {
    textDecoration: 'none',
  },
  signInButton: {
    fontSize: '3vh',
    padding: '2vh 5vh',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    border: '5px solid transparent',
    '&:hover': {
      border: `5px solid white`,
    },
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  signOutButton: {
    position: 'fixed',
    left: '16px',
    bottom: '8px',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <header className={classes.header}>
        <div>Welcome to</div>
        <img className={classes.logo} src={logo} alt="Security Compass" />
      </header>

      <Link className={classes.link} to="/signin/">
        <Button className={classes.signInButton} disableRipple>
          Sign In
        </Button>
      </Link>

      {/* <Link className={classes.link} to="/signout/"> */}
      {/*   <Button */}
      {/*     className={classes.signOutButton} */}
      {/*     disableRipple */}
      {/*     startIcon={<MeetingRoomIcon />} */}
      {/*   > */}
      {/*     Sign Out */}
      {/*   </Button> */}
      {/* </Link> */}
    </>
  );
};

export default Home;
