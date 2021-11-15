import React from 'react';
import QuoteBox from './components/QuoteBox';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  app: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    "& h1": {
      color: '#212529'
    },
    height: '100vh'
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
