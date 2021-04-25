import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  preloader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: 'calc(100vh - 65px)'
  },
  container: {
    margin: '0 auto'
  },
  root: {
    backgroundImage: 'linear-gradient(180deg, #eadbe1, #f0e4e9)',
    minHeight: '100vh'
  }
}));
