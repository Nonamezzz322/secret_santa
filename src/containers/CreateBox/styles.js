import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    padding: theme.spacing(1.75, 0),
    margin: theme.spacing(3, 0, 2)
  }
}));
