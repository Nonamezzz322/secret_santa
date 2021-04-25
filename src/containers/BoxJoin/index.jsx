/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { addUserToBox } from '../../redux/asyncActions/box';

const BoxJoin = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { t } = useTranslation();
  const box = useSelector(state => state.boxes.currentBox);

  const handleClick = () => {
    dispatch(addUserToBox(id));
  };

  return (
    <Container component="main" maxWidth="sm">
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleClick}
      >
        { t('box_item.join_to') }
        {box.name}
      </Button>
    </Container>
  );
};

export default BoxJoin;
