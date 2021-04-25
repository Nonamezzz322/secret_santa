import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

const BoxParticipants = ({ users }) => {
  const classes = useStyles();
  return (
    <Container component="main">
      <Box className={classes.root}>
        {users && users.map(el => (
          <Card className={classes.card} key={el.user}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {el.nameInBox}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

BoxParticipants.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BoxParticipants;
