import React from 'react';
import { Navbar } from '../Navbar';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  background: {
      backgroundImage: `linear-gradient(rgba(0, 49, 85) 0%, rgba(121,147,163,1) 47%, rgba(249,249,249,1) 100%)`,
      width: '100%',
      height: '90%',
      backgroundPosition: 'center',
      position: 'absolute',
      zIndex: -1,
  },
  main_text: {
      textAlign: 'center',
      position: 'relative',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
  },
  button_text: {
      color: 'white',
      textDecoration: 'none',
  },
});


export const About = () => {
  const classes = useStyles();  
  return (
    <div>
      <Navbar />
      <div className={`${classes.background}`}>
      <div className={classes.main_text}>
        <br></br>
        <h1>The following technologies are used for <br></br>this project completion: </h1>
        <br></br>
        <h3>Frameworks </h3>
        <p>○ React</p>

        <p>○ Flask </p>
        <br></br>
        <h3>Databases </h3>
        <p>○ PostGreSQL </p>

        <p>○ SQLite </p>

        <p>○ Firebase </p>
        <br></br>
        <h3>Languages </h3>
        <p>○ Python </p>
        <p>○ JavaScript/TypeScript </p>
        </div>
      </div>
    </div>
  )
}
