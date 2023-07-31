import React from 'react';
import { Button } from '@mui/material';
import useStyle from './style';

interface Props {
  onClick?: () => {};
  text: string;
}

export function ButtonPrimary(props: Props) {
  const classes = useStyle();

  return (
    <Button
      variant="contained"
      disableElevation
      size="large"
      onClick={props.onClick}
      className={classes.btn}
    >
      {props.text}
    </Button>
  );
}
