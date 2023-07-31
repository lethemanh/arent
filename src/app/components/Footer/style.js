import { makeStyles } from '@mui/styles';
import color from 'styles/color';

export default makeStyles(() => ({
  container: {
    backgroundColor: `${color.dark500} !important`,
    padding: '20px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listPage: {
    display: 'flex',
  },
}));
