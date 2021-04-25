import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useFormik } from 'formik';
import { Input } from '../../components/Input/index';
import { useStyles } from './styles';
import { updateBoxUser } from '../../redux/asyncActions/box';

const BoxUserCard = ({ link, currency, limit, allowedPreferences, users, userID }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { t } = useTranslation();

  const userCardData = users?.find(el => el.user === userID);
  const { nameInBox, preferences } = userCardData;

  const formik = useFormik({
    initialValues: {
      nameInBox,
      preferences: preferences || ''
    },
    onSubmit: values => {
      dispatch(updateBoxUser(link, values));
    }
  });

  const { touched, errors, values, handleSubmit, handleChange } = formik;

  return (
    <Container component="main" maxWidth="sm">
      <form className={classes.form} onSubmit={handleSubmit}>
        <Input
          error={touched.nameInBox && Boolean(errors.nameInBox)}
          onChange={handleChange}
          value={values.nameInBox}
          type="text"
          helperText={touched.nameInBox && errors.nameInBox}
          id="nameInBox"
          label={t('common.name')}
        />
        {allowedPreferences && (
          <>
            {limit > 0 && (
              <Typography color="textSecondary" variant="h6">
                Организатор установил ограничение в
                {' '}
                {limit}
                {' '}
                {currency}
              </Typography>
            )}
            <Input
              error={touched.preferences && Boolean(errors.preferences)}
              onChange={handleChange}
              value={values.preferences}
              type="text"
              helperText={touched.preferences && errors.preferences}
              id="preferences"
              label={t('common.preferences')}
            />
          </>
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
          disabled={false}
        >
          { t('common.save') }
        </Button>
      </form>
    </Container>
  );
};

BoxUserCard.propTypes = {
  link: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
  allowedPreferences: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  userID: PropTypes.string.isRequired
};

export default BoxUserCard;
