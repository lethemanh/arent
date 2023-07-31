import React from 'react';
import { AppBar, Button, Container } from '@mui/material';
import color from 'styles/color';
import useStyle from './style';

const pages = [
  { label: '会員登録' },
  { label: '運営会社' },
  { label: '利用規約' },
  { label: '個人情報の取扱について' },
  { label: '特定商取引法に基づく表記' },
  { label: 'お問い合わせ' },
];

export function Footer() {
  const classes = useStyle();

  return (
    <AppBar component="footer" position="static" className={classes.container}>
      <Container maxWidth="lg">
        <div className={classes.toolbar}>
          <div className={classes.listPage}>
            {pages.map(page => (
              <Button
                key={page.label}
                sx={{ mx: 2, display: 'flex', color: color.light }}
              >
                {page.label}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </AppBar>
  );
}
