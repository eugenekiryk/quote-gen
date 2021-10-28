import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  controls: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  buttonPrimary: {
    color: '#8a2be2',
    cursor: 'pointer',
    padding: '0.7rem 1rem',
    backgroundColor: 'white',
    fontWeight: 'bold',
    border: '2px solid #fcac3d',
    boxShadow: '0 0 4px #fcac3d',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: 'whitesmoke'
    },
    '&:active': {
      backgroundColor: 'wheat'
    }
  },
  buttonTwitter: {
    cursor: 'pointer',
    padding: '0.7rem 1rem',
    color: 'white',
    backgroundColor: '#1DA1F2',
    fontWeight: 'bold',
    border: '1px solid #6CB4EE',
    boxShadow: '0 0 3px #1DA1F2',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: '#318CE7'
    },
    '&:active': {
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