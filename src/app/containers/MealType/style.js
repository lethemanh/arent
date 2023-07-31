import { makeStyles } from '@mui/styles';
import color from 'styles/color';
import Hexagon from 'assets/images/hexagon.png';

export default makeStyles(() => ({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '0 auto',
  },
  typeContainer: {
    backgroundImage: `url('${Hexagon}')`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '134px',
    height: '134px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mealName: {
    color: color.light,
    fontSize: '20px',
    marginTop: '10px',
    marginBottom: 0,
  },
}));
