import React from 'react';
import { Typography } from '@mui/material';
import useStyle from './style';

interface Props {
  recommendType: string;
  actionText: string;
}

export function Recommend(props: Props) {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <Typography className={classes.recommendText}>
        {props.recommendType}
      </Typography>
      <div className={classes.divider}></div>
      <Typography className={classes.actionText}>{props.actionText}</Typography>
    </div>
  );
}
