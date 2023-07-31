import { makeStyles } from '@mui/styles';
import color from 'styles/color';

export default makeStyles(() => ({
  btn: {
    backgroundImage: `linear-gradient(33deg, ${color.primary300} 0%, ${color.primary400} 100%)`,
    padding: '15px 60px',
  },
}));
