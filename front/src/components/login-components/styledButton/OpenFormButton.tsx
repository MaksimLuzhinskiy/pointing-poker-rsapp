import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export interface IButton {
  type: string;
  title: string;
}

const useStyles = makeStyles({
  root: {
    background: '#2b3a67',
    borderRadius: 3,
    border: '1px solid #496a81',
    color: 'white',
    height: 48,
    width: 241,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  label: {
    fontFamily: 'Ruda, sans-serif',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: '30px',
  },
});

const OpenFormButton: FC<IButton> = ({ type, title }: IButton) => {
  const classes = useStyles();
  return (
    <div>
      <Button
        type="submit"
        variant="contained"
        classes={{
          root: classes.root,
          label: classes.label,
        }}
      >
        {title}
      </Button>
    </div>
  );
};

export default OpenFormButton;
