import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import Auth from '../Auth';
import Account from '../Account/index';
import HomePage from '../HomePage/index';
import BoxList from '../BoxList/index';
import CreateBox from '../CreateBox/index';
import BoxItem from '../BoxItem/index';
import BoxJoin from '../BoxJoin/index';
import QuestionsAndAnswers from '../FAQ/index';
import { useOne } from '../../hooks/useOne';
import Navbar from '../../components/Navbar/index';
import { auth } from '../../redux/asyncActions/user';
import { useStyles } from './styles';
import { lightTheme } from '../../configs/muiThemes';
import { useError, useSuccess } from '../../hooks/useAlert';
import PrivateRoute from '../PrivateRoute/index';
import PublicRoute from '../PublicRoute/index';

const App = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  useOne(() => dispatch(auth()));

  useError();
  useSuccess();

  return (
    <ThemeProvider theme={lightTheme}>
      <div className={classes.root}>
        <Suspense fallback={null}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/faq" component={QuestionsAndAnswers} />
            <PublicRoute exact path="/login" component={Auth} />
            <PublicRoute exact path="/registration" component={Auth} />
            <PublicRoute exact path="/forgot-password" component={Auth} />
            <PrivateRoute exact path="/account" component={Account} />
            <PrivateRoute exact path="/boxes" component={BoxList} />
            <PrivateRoute exact path="/boxes/create" component={CreateBox} />
            <PrivateRoute path="/box/:id" component={BoxItem} />
            <PrivateRoute exact path="/join-to/:id" component={BoxJoin} />
            <Route path="*" component={() => (<div>404 page</div>)} />
          </Switch>
        </Suspense>
      </div>
    </ThemeProvider>
  );
};

export default App;

