import { makeStyles } from '@mui/styles';
import color from 'styles/color';

export default makeStyles(() => ({
  container: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(234px, 1fr))',
    gap: '15px',
  },
  postContainer: {
    aspectRatio: 1,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  },
  thumbnailContainer: {
    position: 'relative',
    height: '200px',
  },
  postThumbnail: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  postedAt: {
    color: color.light,
    fontSize: '20px',
    marginTop: '10px',
    marginBottom: 0,
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: color.primary300,
    fontSize: '15px',
    padding: '7px',
    minWidth: '115px',
  },
  postTitle: {
    fontSize: '15px',
    marginTop: '10px',
  },
  postTag: {
    fontSize: '12px',
    color: color.primary400,
    marginTop: '5px',
  },
  btn: {
    margin: '30px auto',
    textAlign: 'center',
  },
}));
