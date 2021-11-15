import React from 'react';
import { createUseStyles } from 'react-jss';
import Button from './Button';

const useStyles = createUseStyles({
  controls: {
    display: 'flex',
    justifyContent: 'space-around'
  }
});

const Controls = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.controls}>
      <Button
        onClick={props.handleRandomQuote}
        disabled={props.error}
      >
        New Quote
      </Button>
      <Button
        onClick={props.handleTweetQuote}
        disabled={props.error}
        twitter
      >
        Tweet it
      </Button>
    </div>
  )
}

export default Controls;