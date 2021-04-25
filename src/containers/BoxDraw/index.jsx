/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Button, Box, Card, CardContent, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import { setPairs } from '../../redux/asyncActions/box';

const drawStupidRandom = users => {
  const result = [];
  const recipients = users.slice();
  users.forEach(el => {
    let recipientIndex = Math.floor(Math.random() * recipients.length);

    while (recipients[recipientIndex] === el) {
      recipientIndex = Math.floor(Math.random() * recipients.length);
    }

    const recipient = recipients.splice(recipientIndex, 1)[0];

    result.push({ sender: el, recipient });
  });

  result.sort((a, b) => (a.sender.name > b.sender.name ? 1 : -1));

  return result;
};

const BoxDraw = ({ link, isDraw, users }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const userList = users?.sort((a, b) => (a.nameInBox > b.nameInBox ? 1 : -1));

  const drawSmartRandom = drawArr => {
    for (let i = drawArr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [drawArr[i], drawArr[j]] = [drawArr[j], drawArr[i]];
    }
    drawArr.forEach((el, i, arr) => {
      const recepient = i + 1 === arr.length ? arr[0].user : arr[i + 1].user;
      drawArr[i].recepient = recepient;
    });
    const result = drawArr?.sort((a, b) => (a.nameInBox > b.nameInBox ? 1 : -1));
    return result;
  };

  const handleClick = () => {
    dispatch(setPairs(link, drawSmartRandom(userList)));
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box className={classes.root}>
        <Box className={classes.titles}>
          <Typography variant="h5" component="h2">
            {t('box_item.participant')}
          </Typography>
          <Typography variant="h5" component="h2">
            {t('box_item.recepient')}
          </Typography>
        </Box>
        {userList && userList.map(el => (
          <Box className={classes.userList} key={el.user}>
            <Card className={classes.userItem}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {el.nameInBox}
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.userItem}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {isDraw ? el.recepient : '?'}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
      <Box className={classes.button}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleClick}
        >
          {t('box_item.set_draw')}
        </Button>
      </Box>
    </Container>
  );
};

BoxDraw.propTypes = {
  isDraw: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BoxDraw;
