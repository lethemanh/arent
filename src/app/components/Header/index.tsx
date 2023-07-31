import React, { useCallback, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  AppBar,
  Badge,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Logo from 'assets/images/logo.png';
import Icon1 from 'assets/images/icon_1.png';
import Icon2 from 'assets/images/icon_2.png';
import Icon3 from 'assets/images/icon_3.png';
import Icon4 from 'assets/images/icon_4.png';
import Icon5 from 'assets/images/icon_5.png';
import color from 'styles/color';
import useStyle from './style';

const pages = [
  { icon: Icon1, label: '自分の記録', url: '/my-record', isShowBadge: false },
  { icon: Icon2, label: 'チャレンジ', url: '', isShowBadge: false },
  { icon: Icon3, label: 'お知らせ', url: '', isShowBadge: true },
];
const options = [
  { label: '自分の記録', url: '/my-record' },
  { label: '体重グラフ', url: '' },
  { label: '目標', url: '' },
  { label: '選択中のコース', url: '' },
  { label: 'コラム一覧', url: '/about-health' },
  { label: '設定', url: '' },
];

export function Header() {
  const classes = useStyle();
  const history = useHistory();
  const location = useLocation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const redirect = useCallback(
    (url: string) => {
      console.log('url: ', url);
      history.push(url);
    },
    [history],
  );

  const handleOpenUserMenu = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    },
    [setAnchorElUser],
  );

  const handleCloseUserMenu = useCallback(
    url => {
      redirect(url);
      setAnchorElUser(null);
    },
    [redirect, setAnchorElUser],
  );

  return (
    <AppBar component="nav" className={classes.container}>
      <Container maxWidth="lg">
        <div className={classes.toolbar}>
          <img width="144" src={Logo} onClick={() => redirect('/top-page')} />

          <div className={classes.listPage}>
            {pages.map(page =>
              isSmallScreen ? (
                <IconButton key={page.label} onClick={() => redirect(page.url)}>
                  <img width="30" src={page.icon} />
                </IconButton>
              ) : (
                <Button
                  key={page.label}
                  sx={{
                    mx: 2,
                    display: 'flex',
                    color:
                      page.url === location.pathname
                        ? color.primary400
                        : color.light,
                  }}
                  startIcon={
                    page.isShowBadge ? (
                      <Badge badgeContent={1} className={classes.badgeIcon}>
                        <img width="30" src={page.icon} />
                      </Badge>
                    ) : (
                      <img width="30" src={page.icon} />
                    )
                  }
                  onClick={() => redirect(page.url)}
                >
                  {page.label}
                </Button>
              ),
            )}
          </div>

          <div>
            <img
              width="30"
              src={anchorElUser ? Icon5 : Icon4}
              onClick={handleOpenUserMenu}
            />
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              className={classes.moreMenu}
            >
              {options.map(option => (
                <MenuItem
                  className={classes.moreMenuItem}
                  key={option.label}
                  divider
                  onClick={() => handleCloseUserMenu(option.url)}
                >
                  <p className={classes.moreMenuItemLabel}>{option.label}</p>
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
      </Container>
    </AppBar>
  );
}
