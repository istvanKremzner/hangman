import clsx from 'clsx';
import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

type HTMLButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

interface IButtonProps extends HTMLButtonProps {
  inverted?: boolean
  active?: boolean
}


const useButtonStyles = createUseStyles({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    padding: '6px 16px',
    borderRadius: 4,
    borderColor: 'transparent',
    textTransform: 'uppercase',

    backgroundColor: 'black',
    color: 'white',

    '&:hover, &.active': {
      backgroundColor: 'white',
      color: 'black',
      cursor: 'pointer',
      boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
    },

    '&.inverted': {
      backgroundColor: 'white',
      color: 'black',

      '&:hover, &.active': {
        backgroundColor: 'black',
        color: 'white',
      },
    },
  },
});

export const Button: FC<IButtonProps> = ({
  className,
  inverted = false,
  active = false,
  ...props
}) => {
  const classes = useButtonStyles();

  return (
    <button
      {...props}
      className={
        clsx({
          [className ?? '']: true,
          [classes.button]: true,
          inverted: inverted,
          active: active,
        })}

    />
  );
};
