import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    color: '#463f3a',
    cursor: 'pointer',
    padding: '1rem 0.7rem',
    backgroundColor: '#ffffff',
    fontWeight: '700',
    fontSize: '1rem',
    border: '2px solid',
    boxShadow: '0 0.2rem 0.7rem #ccc',
    '&:hover': {
      backgroundColor: '#463f3a',
      color: '#ffffff',
      borderColor: '#463f3a'
    }
  },
  buttonTwitter: {
    color: '#62929e',
    '&:hover': {
      backgroundColor: '#62929e',
      color: '#ffffff',
      borderColor: '#62929e'
    }
  }
});

function Button({ children, onClick, disabled, twitter }) {
  const classes = useStyles();

  return (
    <button
      className={`${classes.button} ${twitter && classes.buttonTwitter}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;