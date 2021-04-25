import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { deleteBox } from '../../redux/asyncActions/box';

const BoxDelete = ({ id }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleClick = () => {
    dispatch(deleteBox(id));
  };

  return (
    <Container component="main" maxWidth="sm">
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleClick}
      >
        { t('box_item.delete_box') }
      </Button>
    </Container>
  );
};

BoxDelete.propTypes = {
  id: PropTypes.string.isRequired
};

export default BoxDelete;
