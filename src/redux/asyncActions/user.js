import axios from 'axios';
import { setUser, logout } from '../reducers/userReducer';
import { loadingSuccess,
  loadingError,
  isLoading
} from '../reducers/loadingReducer';
import { API_URL } from '../../configs/envConfig';
import { b64toBlob } from '../../helpres/base64toBlobConverter';

export const authAction = (data, type) => async dispatch => {
  try {
    dispatch(isLoading());
    const response = await axios.post(`${API_URL}/auth/${type}`, data);
    dispatch(setUser(response.data.user));
    localStorage.setItem('token', response.data.token);
    dispatch(loadingSuccess(response.data.message));
  } catch (e) {
    if (e.response) {
      dispatch(loadingError(e.response.data.message));
    } else {
      dispatch(loadingError('Ooops... Something was wrong'));
    }
  }
};

export const auth = () => async dispatch => {
  try {
    dispatch(isLoading());
    const response = await axios.get(`${API_URL}/auth/auth`,
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    dispatch(setUser(response.data.user));
    dispatch(loadingSuccess(response.data.message));
  } catch (e) {
    dispatch(logout());
  }
};

export const uploadAvatar = file => async dispatch => {
  try {
    dispatch(isLoading());
    const formData = new FormData();
    formData.append('file', file);
    const response = await axios.post(`${API_URL}/files/avatar`, formData,
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    dispatch(setUser(response.data));
    dispatch(loadingSuccess(response.data.message));
  } catch (e) {
    if (e.response) {
      dispatch(loadingError(e.response.data.message));
    } else {
      dispatch(loadingError('Ooops... Something was wrong'));
    }
  }
};

export const uploadCroppAvatar = arg => async dispatch => {
  try {
    dispatch(isLoading());
    const blob = b64toBlob(arg);
    const formData = new FormData();
    formData.append('file', blob);
    const response = await axios.post(`${API_URL}/files/avatar/cropp`, formData,
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    dispatch(setUser(response.data));
    dispatch(loadingSuccess(response.data.message));
  } catch (e) {
    if (e.response) {
      dispatch(loadingError(e.response.data.message));
    } else {
      dispatch(loadingError('Ooops... Something was wrong'));
    }
  }
};

export const deleteAvatar = () => async dispatch => {
  try {
    dispatch(isLoading());
    const response = await axios.delete(`${API_URL}/files/avatar`,
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    dispatch(setUser(response.data));
    dispatch(loadingSuccess(response.data.message));
  } catch (e) {
    if (e.response) {
      dispatch(loadingError(e.response.data.message));
    } else {
      dispatch(loadingError('Ooops... Something was wrong'));
    }
  }
};
