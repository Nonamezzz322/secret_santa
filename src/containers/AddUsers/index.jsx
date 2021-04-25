import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { Typography, Button } from '@material-ui/core';
import { addUserToBox, deleteUserFromBox } from '../../redux/asyncActions/box';

const AddUsers = ({ id }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleClick = () => {
    dispatch(addUserToBox(id));
  };

  const handleClick2 = () => {
    dispatch(deleteUserFromBox(id));
  };

  return (
    <Container component="main" maxWidth="sm">
      <Typography>
        http://localhost:3000/join-to/
        {id}
      </Typography>
      <Button variant="outlined" onClick={handleClick}>{ t('box_item.add_user') }</Button>
      <Button variant="outlined" onClick={handleClick2}>{ t('box_item.delete_user') }</Button>
    </Container>
  );
};

AddUsers.propTypes = {
  id: PropTypes.string.isRequired
};

export default AddUsers;
