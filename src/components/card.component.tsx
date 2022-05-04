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
    border: '1px solid #888',
    borderRadius: '0.5rem',
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
