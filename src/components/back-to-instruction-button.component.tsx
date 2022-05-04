import { createUseStyles } from 'react-jss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGameState } from '../store';
import { BackArrow } from './back-arrow.component';

const useBackToInstructionsButtonStyles = createUseStyles({
  backToInstructionsContainer: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    width: '100%',

    '&>button': {
      textTransform: 'uppercase',
      backgroundColor: 'transparent',
      border: 'none',
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'center',
      gap: 10,

      '&:hover': {
        color: 'white',
        fill: 'white',
        backgroundColor: 'black',
        borderRadius: 4,
      },

      '&>p': {
        padding: 0,
        margin: 0,
      }
    },
  },
});

export const BackToInstructionsButton = () => {
  const classes = useBackToInstructionsButtonStyles();
  const gameState = useGameState();
  const location = useLocation();
  const navigate = useNavigate();

  const handleInstructionsClick = () => {
    navigate('/');
  };

  return (
    gameState === 'started' && location.pathname === '/game' ?
      (
        <div className={classes.backToInstructionsContainer}>
          <button onClick={handleInstructionsClick} >
            <p>Instructions</p>
            <BackArrow />
          </button>
        </div>
      ) : null
  );
};
