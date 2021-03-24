import React from 'react';
import QuoteBox from './QuoteBox';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  app: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    "& h1": {
      color: '#fcac3d'
    }
  }
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <h1>Random Quote Generator</h1>
      <QuoteBox />
    </div>
  );
} 

export default App;
