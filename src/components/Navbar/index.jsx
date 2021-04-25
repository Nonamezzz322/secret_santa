import { React, useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { Avatar, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './styles';
import avatarPlaceholder from '../../assets/img/avatar.svg';
import { HOST_URL } from '../../configs/envConfig';
import logo from '../../assets/img/santa_logo.png';
import { logout } from '../../redux/reducers/userReducer';

const NavBar = () => {
  const isAuth = useSelector(state => state.user.isAuth);
  const user = useSelector(state => state.user.currentUser);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const avatarCroppedImage = user.avatarCroppedImage ? `${HOST_URL}/${user.avatarCroppedImage}` : avatarPlaceholder;

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const logOut = () => {
    handleClose();
    dispatch(logout());
  };
  const choseLanguage = langCode => {
    i18next.changeLanguage(langCode);
  };

  return (
    <div className={classes.root}>
      <AppBar
        color="secondary"
        position="static"
      >
        <Container className={classes.container}>
          <Toolbar>
            <Box component="div">
              <img className={classes.logo} src={logo} alt="logo" />
            </Box>
            <Typography variant="h6" className={classes.title}>
              { t('common.main_title') }
            </Typography>
            {/* <Typography variant="body1" className={classes.link}>
              { t('common.chose_language') }
            </Typography> */}
            <button type="button" onClick={(() => choseLanguage('en'))}>EN</button>
            <button type="button" onClick={(() => choseLanguage('ru'))}>RU</button>
            <button type="button" onClick={(() => choseLanguage('ua'))}>UA</button>
            <Typography variant="body1">
              <Link
                className={classes.link}
                color="inherit"
                underline="none"
                component={NavLink}
                to="/"
              >
                { t('common.to_main') }
              </Link>
              {isAuth
              && (
                <Link
                  className={classes.link}
                  color="inherit"
                  underline="none"
                  component={NavLink}
                  to="/boxes"
                >
                  { t('common.my_boxes') }
                </Link>
              ) }
            </Typography>
            {isAuth && <Typography className={classes.link}>{user.name}</Typography> }
            <div>

              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {isAuth ? <Avatar src={avatarCroppedImage} /> : <MenuIcon /> }
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={handleClose}
              >
                {isAuth
                  ? (
                    <div>
                      <MenuItem
                        component={NavLink}
                        to="/faq"
                        onClick={handleClose}
                      >
                        { t('common.questions') }
                      </MenuItem>
                      <MenuItem
                        component={NavLink}
                        to="/account"
                        onClick={handleClose}
                      >
                        { t('common.my_account') }
                      </MenuItem>
                      <MenuItem
                        component={NavLink}
                        to="/"
                        onClick={logOut}
                      >
                        { t('common.logout') }
                      </MenuItem>
                    </div>
                  ) : (
                    <div>
                      <MenuItem
                        component={NavLink}
                        to="/login"
                        onClick={handleClose}
                      >
                        { t('common.login') }
                      </MenuItem>
                      <MenuItem
                        component={NavLink}
                        to="/registration"
                        onClick={handleClose}
                      >
                        { t('common.register') }
                      </MenuItem>
                    </div>
                  )}
              </Menu>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default NavBar;
