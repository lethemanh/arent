import { makeStyles } from '@mui/styles';
import color from 'styles/color';

export default makeStyles(theme => ({
  container: {
    backgroundColor: `${color.dark500} !important`,
    boxShadow: 'none',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listPage: {
    display: 'flex',
  },
  moreMenu: {
    '& .MuiMenu-paper': {
      backgroundColor: color.gray400,
      width: '280px',
      borderRadius: '0',
      padding: '0',
      '& .MuiMenu-list': {
        padding: 0,
      },
    },
  },
  moreMenuItem: {
    '&.MuiMenuItem-root': {
      padding: '23px 32px',
    },
  },
  moreMenuItemLabel: {
    margin: 0,
    color: color.light,
  },
  badgeIcon: {
    '& .MuiBadge-badge': {
      backgroundColor: color.primary400,
    },
  },
}));
