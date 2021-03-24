import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  controls: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  buttonPrimary: {
    color: '#8a2be2',
    cursor: 'pointer',
    padding: '10px',
    backgroundColor: 'white',
    border: '2px solid #fcac3d',
    boxShadow: '2px 2px 3px #fcac3d',
    borderRadius: '10px',
    '&:hover': {
      border: '3px solid orange',
      backgroundColor: 'whitesmoke'
    },
    '&:active': {
      border: '3px solid orange',
      backgroundColor: 'wheat'
    }
  },
  buttonTwitter: {
    cursor: 'pointer',
    padding: '10px',
    color: 'white',
    backgroundColor: '#1DA1F2',
    border: '2px solid #6CB4EE',
    boxShadow: '2px 2px 3px #1DA1F2',
    borderRadius: '10px',
    '&:hover': {
      border: '3px solid #8a2be2',
      backgroundColor: '#318CE7'
    },
    '&:active': {
      border: '3px solid #8a2be2',
      backgroundColor: '#6CB4EE'
    }
  }
});

const Controls = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.controls}>
      <button 
        className={classes.buttonPrimary}
        onClick={props.handleRandomQuote}
        disabled={props.error}
      >
        New Quote
      </button>
      <button 
        onClick={props.handleTweetQuote}
        disabled={props.error}
        className={classes.buttonTwitter}
      >
        Tweet it
      </button>
    </div>
  )
}

export default Controls;