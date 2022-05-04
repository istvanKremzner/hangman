import { createUseStyles } from 'react-jss';
import { Hangman } from '../components';

const useHomeStyles = createUseStyles({
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    margin: 'auto',
  }
});

export const Home = () => {
  const classes = useHomeStyles();

  return (
    <main className={classes.homeContainer}>
      <h1>The Hangman</h1>
      <Hangman width="30%" />

      <h2>Game instructions</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </main>
  );
};
