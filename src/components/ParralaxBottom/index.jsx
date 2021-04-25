import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { useStyles } from './styles';
import { useScroll } from '../../hooks/useScroll';

const ParralaxBottom = ({ image, transformCoefficient }) => {
  const classes = useStyles();
  const scroll = useScroll();
  return (
    <Box>
      <Box
        className={classes.image}
        style={{
          backgroundImage: `url("${image}")`,
          transform: `translateX(-${Math.ceil(scroll) / transformCoefficient}px)`
        }}
      />
    </Box>
  );
};

ParralaxBottom.propTypes = {
  image: PropTypes.string.isRequired,
  transformCoefficient: PropTypes.number.isRequired
};

export default ParralaxBottom;
