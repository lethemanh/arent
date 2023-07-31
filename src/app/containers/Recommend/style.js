import { makeStyles } from '@mui/styles';
import color from 'styles/color';

export default makeStyles(() => ({
  container: {
    width: '100%',
    minHeight: '144px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.dark600,
    padding: '20px',
  },
  recommendText: {
    color: color.primary300,
    fontSize: '22px',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  divider: {
    width: '30%',
    height: '1px',
    backgroundColor: color.light,
    margin: '10px 0',
  },
  actionText: {
    color: color.light,
    fontSize: '18px',
  },
}));
