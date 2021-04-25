import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { useFormik } from 'formik';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { v4 as uuidv4 } from 'uuid';
import { Input } from '../../components/Input/index';
import { createBoxSchema } from '../../configs/validationSchemes';
import { useStyles } from './styles';
import { createBox } from '../../redux/asyncActions/box';

const CreateBox = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { t } = useTranslation();

  const currency = ['RUB', 'UAH', 'USD'];

  const formik = useFormik({
    initialValues: {
      name: '',
      link: uuidv4(),
      isLimit: false,
      limit: 0,
      currency: 'RUB',
      creatorIn: false,
      allowedPreferences: false
    },
    validationSchema: createBoxSchema,
    onSubmit: values => {
      dispatch(createBox({ ...values }));
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
        <Input
          error={touched.link && Boolean(errors.link)}
          onChange={handleChange}
          value={values.link.trim()}
          type="text"
          helperText={touched.link && errors.link}
          id="link"
          label={t('box_create.box_id')}
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
            {currency.map(el => <MenuItem key={el} name={el} value={el}>{el}</MenuItem>)}
          </Select>
          <FormHelperText>{ t('common.currency') }</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Switch
            checked={values.creatorIn}
            onChange={handleChange}
            name="creatorIn"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          <FormHelperText>{ t('box_create.creator') }</FormHelperText>
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
          { t('common.create_box') }
        </Button>
      </form>
    </Container>
  );
};

export default CreateBox;
