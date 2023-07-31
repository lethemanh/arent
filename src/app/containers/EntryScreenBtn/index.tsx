import { Button } from '@mui/material';
import React from 'react';
import useStyle from './style';

interface Props {
  entryScreen: string;
  background: string;
  btnText: string;
}

export function EntryScreenBtn(props: Props) {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <img className={classes.background} src={props.background} />
      <div className={classes.overlay}></div>
      <p className={classes.entryScreenText}>{props.entryScreen}</p>
      <Button variant="contained" className={classes.btnEntry} disableElevation>
        {props.btnText}
      </Button>
    </div>
  );
}
