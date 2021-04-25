import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { useFormik } from 'formik';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Input } from '../../components/Input/index';
import { useStyles } from './styles';
import { updateBoxSettings } from '../../redux/asyncActions/box';

const BoxSettings = ({ link, currency, limit, allowedPreferences, name }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { t } = useTranslation();

  const currencys = ['RUB', 'UAH', 'USD'];

  const formik = useFormik({
    initialValues: {
      name,
      isLimit: limit > 0,
      limit,
      currency: currency || 'RUB',
      allowedPreferences
    },
    onSubmit: values => {
      dispatch(updateBoxSettings(link, { ...values }));
    }
  });

  const { touched, errors, values, handleSubmit, handleChange } = formik;

  return (
    <Container component="main" maxWidth="sm">
      <form className={classes.form} onSubmit={handleSubmit}>
        <Input
          error={touched.name && Boolean(errors.name)}
          onChange={handleChange}
          value={values.name}
          type="text"
          helperText={touched.name && errors.name}
          id="name"
          label={t('common.name')}
        />
        <FormControl className={classes.formControl}>
          <Switch
            checked={values.isLimit}
            onChange={handleChange}
            name="isLimit"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          <FormHelperText>{t('box_create.limit')}</FormHelperText>
        </FormControl>
        <Input
          error={touched.limit && Boolean(errors.limit)}
          onChange={handleChange}
          value={values.limit}
          type="number"
          helperText={touched.limit && errors.limit}
          id="limit"
          label={t('box_create.limitation')}
        />
        <FormControl className={classes.formControl}>
          <Select
            value={values.currency}
            name="currency"
            onChange={handleChange}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            {currencys.map(el => <MenuItem key={el} name={el} value={el}>{el}</MenuItem>)}
          </Select>
          <FormHelperText>{ t('common.currency') }</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Switch
            checked={values.allowedPreferences}
            onChange={handleChange}
            name="allowedPreferences"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          <FormHelperText>{ t('common.preferences') }</FormHelperText>
        </FormControl>
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

BoxSettings.propTypes = {
  link: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
  allowedPreferences: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

export default BoxSettings;
