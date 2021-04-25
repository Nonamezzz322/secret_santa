import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { useFormik } from 'formik';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import { loginSchema, registrationSchema } from '../../configs/validationSchemes';
import { Input } from '../../components/Input/index';
import { authAction } from '../../redux/asyncActions/user';

import logo from '../../assets/img/santa_logo_with_text.png';

const Auth = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema: pathname === '/login' ? loginSchema : registrationSchema,
    onSubmit: values => {
      dispatch(authAction(values, pathname.substr(1)));
    }
  });

  const { touched, errors, values, handleSubmit, handleChange } = formik;

  return (
    <Container component="main" maxWidth="sm">
      <Box component="div" className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt="logo" />
      </Box>
      <Paper elevation={8} className={classes.paper}>
        <Typography color="textSecondary" variant="h4">
          {pathname === '/registration' ? t('common.register') : t('common.login')}
        </Typography>
        <Typography color="textSecondary">
          {pathname === '/registration' ? t('auth.get_register') : t('auth.get_enter')}
          ,
          { t('auth.tagline') }
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          {pathname === '/registration'
          && (
            <Input
              error={touched.name && Boolean(errors.name)}
              onChange={handleChange}
              value={values.name}
              type="text"
              helperText={touched.name && errors.name}
              id="name"
              label={t('common.name')}
            />
          )}
          <Input
            error={touched.email && Boolean(errors.email)}
            onChange={handleChange}
            value={values.email}
            type="email"
            helperText={touched.name && errors.email}
            id="email"
            label="Email"
            autoComplete="email"
          />
          <Input
            error={touched.password && Boolean(errors.password)}
            onChange={handleChange}
            value={values.password}
            type="password"
            helperText={touched.name && errors.password}
            id="password"
            label={t('common.password')}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            {pathname === '/login' ? t('common.login') : t('common.register')}
          </Button>
          {pathname === '/login'
            ? (
              <Grid container>
                <Grid item xs>
                  <Link
                    color="textSecondary"
                    component={NavLink}
                    to="/forgot-password"
                    variant="body2"
                  >
                    { t('auth.forgot_password') }
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    color="textSecondary"
                    component={NavLink}
                    to="/registration"
                    variant="body2"
                  >
                    { t('auth.not_account') }
                  </Link>
                </Grid>
              </Grid>
            ) : (
              <Grid container>
                <Grid item xs>
                  <Link
                    color="textSecondary"
                    component={NavLink}
                    to="/login"
                    variant="body2"
                  >
                    { t('auth.have_account') }
                  </Link>
                </Grid>
              </Grid>
            )}
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
