import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  card: {
    width: '100%',
    margin: theme.spacing(1, 0)
  },
  title: {
    color: '#000',
    margin: theme.spacing(3, 'auto')
  }
}));
