import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '600vh'
  },
  box: {
    padding: '0',
    display: 'flex'
  },
  titleBox: {
    marginTop: theme.spacing(15),
    fontWeight: 600
  },
  santaAnimate: {
    height: '400px',
    animation: `$santaTransition 10s infinite ${theme.transitions.easing.easeInOut}`
  },
  '@keyframes santaTransition': {
    '0%': {
      transform: 'translateY(0)'
    },
    '50%': {
      transform: 'translateY(60px)'
    },
    '100%': {
      transform: 'translateY(0)'
    }
  }
}));
