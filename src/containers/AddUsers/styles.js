import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    padding: theme.spacing(1.75, 0),
    margin: theme.spacing(3, 0, 2)
  },
  logo: {
    height: theme.spacing(15)
  },
  logoContainer: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  }
}));
