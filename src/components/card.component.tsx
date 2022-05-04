import { FC } from 'react';
import { createUseStyles } from 'react-jss';

interface ICardProps {
  children: React.ReactNode
}

const useCardStyles = createUseStyles({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5% 10%',
    border: '1px solid #ddd',
    borderRadius: '0.5rem',
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  },
});

export const Card: FC<ICardProps> = ({ children }) => {
  const classes = useCardStyles();

  return (
    <div className={classes.cardContainer}>
      {children}
    </div>
  );
};
