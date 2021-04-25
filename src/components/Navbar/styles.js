import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    zIndex: 100
  },
  container: {
    width: '70vw',
    margin: '0 auto'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    marginLeft: theme.spacing(2),
    fontWeight: 500
  },
  logo: {
    marginRight: theme.spacing(3),
    height: theme.spacing(6)
  }
}));
