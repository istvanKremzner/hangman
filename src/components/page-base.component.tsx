import { FC } from 'react';
import { createUseStyles } from 'react-jss';
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '40%',
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
        <h1>The Hangman</h1>
        {children}
      </Card>
    </main>
  );
};
