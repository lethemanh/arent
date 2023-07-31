import { makeStyles } from '@mui/styles';
import color from 'styles/color';

export default makeStyles(() => ({
  container: {
    width: '100%',
    backgroundColor: color.dark600,
    padding: '20px',
  },
  headerSection: {
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
  recordWrapper: {
    maxHeight: '200px',
    overflow: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(40%, 1fr))',
    gap: '0 40px',
    paddingRight: '30px',
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-track': {
      // boxShadow: `inset 0 0 1px ${color.gray400}`,
      backgroundColor: color.gray400,
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: color.primary300,
      borderRadius: '10px',
    },
  },
  exerciseRecordContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `1px solid ${color.gray400}`,
    padding: '5px',
  },
  exercise: {},
  exerciseName: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '5px',
  },
  itemDot: {
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    backgroundColor: color.light,
  },
  exerciseNameText: {
    color: color.light,
    margin: 0,
  },
  burnedCalories: {
    color: color.primary300,
    margin: 0,
  },
  exerciseTime: {
    color: color.primary300,
    margin: 0,
  },
}));
