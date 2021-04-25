import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  image: {
    position: 'fixed',
    height: '300px',
    width: '10000px',
    bottom: '0',
    left: '0',
    backgroundPosition: 'top left',
    backgroundRepeat: 'repeat-x',
    backgroundSize: 'contain',
    opacity: 0.3,
    zIndex: 0,
    transition: 'all 200ms ease-out'
  }
}));
