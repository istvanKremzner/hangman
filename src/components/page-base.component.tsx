import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { BackToInstructionsButton } from './back-to-instruction-button.component';
import { Card } from './card.component';

interface IPageBaseProps {
  children: React.ReactNode
}

const usePageBaseStyles = createUseStyles({
  '@global': {
    body: {
      backgroundColor: '#aaa',
    },
  },
  pageContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    padding: '0 10%',
    margin: '5% auto auto',
    textAlign: 'center',
  },
});

export const PageBase: FC<IPageBaseProps> = ({ children }) => {
  const classes = usePageBaseStyles();

  return (
    <main className={classes.pageContainer}>
      <Card>
        <BackToInstructionsButton />

        <h1>The Hangman</h1>
        {children}
      </Card>
    </main>
  );
};
