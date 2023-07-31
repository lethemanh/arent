import { makeStyles } from '@mui/styles';
import color from 'styles/color';

export default makeStyles(() => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
    border: `24px solid ${color.primary300}`,
    position: 'relative',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: color.dark600,
    opacity: 0.8,
  },
  entryScreenText: {
    color: color.primary300,
    textTransform: 'uppercase',
    fontSize: '25px',
    zIndex: 1,
  },
  btnEntry: {
    borderRadius: 0,
    backgroundColor: color.primary400,
    '&:hover': {
      backgroundColor: color.primary400,
    },
  },
}));
