import clsx from 'clsx';
import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

type HTMLButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

interface IButtonProps extends HTMLButtonProps {
  inverted?: boolean
}


const useButtonStyles = createUseStyles({
  button: {
    backgroundColor: 'black',
    color: 'white',
    boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    padding: '6px 16px',
    borderRadius: 4,
    borderColor: 'transparent',
    textTransform: 'uppercase',

    '&.inverted': {
      backgroundColor: 'white',
      color: 'black',
    },
  },
});

export const Button: FC<IButtonProps> = ({
  className,
  inverted = false,
  ...props
}) => {
  const classes = useButtonStyles();

  return (
    <button
      {...props}
      className={
        clsx({
          className,
          [classes.button]: true,
          inverted: inverted,
        })}

    />
  );
};
