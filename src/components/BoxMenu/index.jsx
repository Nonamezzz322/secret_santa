import { React, useState } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useStyles } from './styles';

const BoxMenu = ({ tabs }) => {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered
        >
          {tabs.map(el => (
            <Tab key={el.link} label={el.label} component={NavLink} to={`${url}/${el.link}`} />
          ))}
        </Tabs>
      </Paper>
    </div>
  );
};

BoxMenu.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BoxMenu;
