import { makeStyles } from '@mui/styles';
import color from 'styles/color';
import d01 from 'assets/images/d01.jpg';

export default makeStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
    backgroundImage: `url('${d01}')`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    display: 'inline-flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    height: '316px',
  },
  progressCircle: {
    filter: `drop-shadow(0px 0px 6px ${color.primary})`,
    color: color.light,
  },
  text: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'center',
    gap: '8px',
  },
  achievementText: {
    color: color.light,
    textShadow: `0px 0px 6px ${color.primary}`,
    fontSize: '18px',
  },
  percentageText: {
    color: color.light,
    textShadow: `0px 0px 6px ${color.primary}`,
    fontSize: '25px',
  },
}));
