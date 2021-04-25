/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const BoxWard = ({ limit, currency, users, isDraw, userID, allowedPreferences }) => {
  const { t } = useTranslation();

  const ward = users.find(el => el.user === userID);
  const { preferences } = users.find(el => el.nameInBox === ward.recepient);

  return (
    <Container component="main" maxWidth="lg">
      <Card>
        <CardContent>
          <Typography color="textSecondary">
            Привет, мой тайный Санта!
            Меня зовут
            {' '}
            {isDraw && ward.recepient}
            {' '}
            и теперь ты знаешь, кому нужно приготовить подарок!
            Наш организатор поставил ограничение в
            {' '}
            { limit }
            {' '}
            { currency }
            , постарайся уложиться в эту сумму.
            { allowedPreferences && preferences !== null
            && `Если возникнут трудности с выбором подарка, воспользуйся моей подcказкой: ${preferences}`}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

BoxWard.propTypes = {
  isDraw: PropTypes.bool.isRequired,
  currency: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
  userID: PropTypes.string.isRequired,
  allowedPreferences: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BoxWard;
