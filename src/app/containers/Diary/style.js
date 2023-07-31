import { makeStyles } from '@mui/styles';
import color from 'styles/color';

export default makeStyles(() => ({
  container: {
    width: '100%',
  },
  title: {
    fontSize: '22px',
    marginBottom: '10px',
  },
  diaryWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(234px, 1fr))',
    gap: '15px',
  },
  diaryRecordContainer: {
    aspectRatio: 1,
    border: `2px solid ${color.gray}`,
    padding: '16px',
  },
  dateText: {
    fontSize: '18px',
  },
  timeText: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  diaryTitleText: {
    fontSize: '12px',
  },
  contentText: {
    fontSize: '12px',
  },
  btn: {
    margin: '30px auto',
    textAlign: 'center',
  },
}));
