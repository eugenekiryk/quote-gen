import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createUseStyles } from 'react-jss';
import Controls from './Controls';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const useStyles = createUseStyles({
  quoteBox: {
    font: '24px bold',
    color: '#8a2be2',
    backgroundColor: '#FFFAFA',
    border: '2px solid',
    borderRadius: '10px',
    width: '50%',
    margin: 'auto',
    padding: '3%',
    boxShadow: '0 0 4px #8a2be2',
    "@media screen and (max-width: 1024px)": {
      width: '80%',
      marginBottom: '10vh'
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
          color="#8a2be2" 
          height={60} 
          width={60}
        />
        : 
        <>
          { error.status ? 
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