import React from 'react';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
// import CircularProgress from '@material-ui/core/CircularProgress';
import { NavLink } from 'react-router-dom';
import { useOne } from '../../hooks/useOne';
import { getBoxes } from '../../redux/asyncActions/box';
import { useStyles } from './styles';

const BoxList = () => {
  const classes = useStyles();
  const boxes = useSelector(state => state.boxes.boxesList);
  const { t } = useTranslation();
  // const isLoadingData = useSelector(state => state.loading.isLoadingData);
  const dispatch = useDispatch();

  useOne(() => dispatch(getBoxes()));

  return (
    <Container component="main">
      <Box className={classes.root}>
        {boxes && boxes.map(box => (
          <Card className={classes.card} key={box.link}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {box.name}
              </Typography>
              <Typography color="textSecondary">
                { t('box_list.users_quantity') }
                {box.usersQuantity}
              </Typography>
              <Typography color="textSecondary">
                { t('box_list.roles') }
                {box.roles.length > 1 ? `${box.roles[0]} и ${box.roles[1]}` : box.roles[0]}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={NavLink} to={`box/${box.link}`}>{ t('box_list.goto') }</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
      <Button
        size="large"
        color="secondary"
        component={NavLink}
        to="/boxes/create"
      >
        { t('common.create_box') }
      </Button>
    </Container>
  );
};

export default BoxList;
