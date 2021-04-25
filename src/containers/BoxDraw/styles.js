import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  userList: {
    display: 'flex',
    flexDirection: 'row'
  },
  userItem: {
    margin: theme.spacing(2),
    width: '400px'
  },
  titles: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  button: {
    display: 'flex',
    justifyContent: 'center'
  }
}));
