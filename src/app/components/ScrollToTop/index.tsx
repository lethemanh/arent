import React from 'react';
import { IconButton } from '@mui/material';
import ScrollTopIcon from 'assets/images/scroll-top.png';
import useStyle from './style';

export function ScrollToTop() {
  const classes = useStyle();

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <IconButton className={classes.scrollTopBtn} onClick={scrollTop}>
      <img className={classes.icon} src={ScrollTopIcon} />
    </IconButton>
  );
}
