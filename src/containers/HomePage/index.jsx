import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import santa from '../../assets/img/santa_logo.png';
import { useStyles } from './styles';
import ParralaxBottom from '../../components/ParralaxBottom/index';
import trees from '../../assets/img/trees.png';
import { useScroll } from '../../hooks/useScroll';
import SnowFall from '../../components/SnowFall/index';

const HomePage = () => {
  const classes = useStyles();
  const scroll = useScroll();
  const { t } = useTranslation();
  const bgOpacity = scroll / window.innerHeight < 0.7 ? 1 - scroll / window.innerHeight : 0.3;

  return (
    <div style={{ backgroundColor: `rgba(191, 109, 152, ${bgOpacity})` }}>
      <SnowFall />
      <Container className={classes.root}>
        <Box className={classes.box}>
          <Paper
            variant="outlined"
            elevation={2}
            className={classes.titleBox}
          >
            <Typography variant="h2">
              { t('common.main_title') }
            </Typography>
            <Typography variant="h5">
              { t('home_page.tagline_1') }
            </Typography>
            <Typography variant="h5">
              { t('home_page.tagline_2') }
            </Typography>
          </Paper>
          <Box>
            <img
              className={classes.santaAnimate}
              src={santa}
              alt="santa"
            />
          </Box>
        </Box>
        <Button
          variant="contained"
          component={NavLink}
          to="/boxes/create"
          color="secondary"
        >
          { t('common.create_box') }
        </Button>
        <ParralaxBottom image={trees} transformCoefficient={4} />
      </Container>
    </div>
  );
};

export default HomePage;
