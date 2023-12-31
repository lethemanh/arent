import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: '300px',
    margin: '0 auto',
  },
  formContainer: {
    width: '40%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));
