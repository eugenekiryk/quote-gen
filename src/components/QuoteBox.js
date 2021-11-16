import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createUseStyles } from 'react-jss';
import Controls from './Controls';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const useStyles = createUseStyles({
  quoteBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    color: '#463f3a',
    fontSize: '1.5rem',
    fontFamily: 'inherit',
    letterSpacing: '1.5px',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 1rem #ccc',
    width: '50%',
    padding: '3rem',
    marginBottom: '10%',
    "@media screen and (max-width: 1024px)": {
      width: '90%'
    }
  }
});

const QuoteBox = () => {
  const [currentQuote, setCurrentQuote] = useState({ author: '', text: '' });
  const [error, setError] = useState({ status: false, message: '' });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    axios.get('https://api.quotable.io/random')
      .then(response => {
        const quote = response.data;
        setCurrentQuote({
          author: `- ${quote.author}`,
          text: `❝${quote.content}❞`
        });
        setLoading(false);
      })
      .catch(error => {
        setError({
          status: true,
          message: `Oops! ${error}`
        });
        setLoading(false);
      });
  }

  const handleRandomQuote = () => {
    fetchQuote();
  }

  const handleTweetQuote = () => {
    window.open(`
    https://twitter.com/intent/tweet?text=${currentQuote.text}%0D%0A%0D%0A${currentQuote.author}
    `);
  }

  const classes = useStyles();

  return (
    <div className={classes.quoteBox}>
      {
        isLoading ?
          <Loader
            type="TailSpin"
            color="#463f3a"
            height={60}
            width={60}
          />
          :
          <>
            {error.status ?
              <p>{error.message}</p>
              :
              <>
                <p>{currentQuote.text}</p>
                <p>{currentQuote.author}</p>
              </>
            }
          </>
      }
      <Controls
        handleRandomQuote={handleRandomQuote}
        handleTweetQuote={handleTweetQuote}
        error={error.status}
      />
    </div>
  )
}

export default QuoteBox;