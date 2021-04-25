import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import AvatarCropper from '../../components/AvatarCropper/index';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    height: '90vh'
  }
}));

const Account = () => {
  const isAuth = useSelector(state => state.user.isAuth);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {isAuth
        && (
          <Container>
            <AvatarCropper />
          </Container>
        )}
    </div>
  );
};

export default Account;
