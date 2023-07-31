import { makeStyles } from '@mui/styles';
import color from 'styles/color';

export default makeStyles(() => ({
  container: {
    width: '100%',
    backgroundColor: color.dark600,
    padding: '20px',
  },
  chartHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    marginBottom: '10px',
  },
  title: {
    fontSize: '15px',
    color: color.light,
    width: '65px',
  },
  date: {
    fontSize: '22px',
    color: color.light,
  },
  chartWrapper: {
    height: '200px',
  },
  btnGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '10px',
  },
  btn: {
    borderRadius: '17px',
    backgroundColor: color.light,
    color: color.primary300,
    '&:hover': {
      backgroundColor: color.light,
    },
  },
  btnActive: {
    backgroundColor: color.primary300,
    color: color.light,
    '&:hover': {
      backgroundColor: color.primary300,
    },
  },
}));
