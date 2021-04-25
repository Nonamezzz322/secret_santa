import axios from 'axios';
import { loadingSuccess,
  loadingError,
  isLoading
} from '../reducers/loadingReducer';
import { API_URL } from '../../configs/envConfig';
import { setBoxes, setCurrentBox } from '../reducers/boxReducer';

export const createBox = values => {
  const { name,
    link,
    currency,
    creatorIn,
    limit,
    allowedPreferences } = values;

  return async dispatch => {
    try {
      dispatch(isLoading());
      const response = await axios.post(`${API_URL}/box/create`,
        {
          name,
          link,
          currency,
          limit,
          allowedPreferences,
          creatorIn
        },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      dispatch(loadingSuccess(response.data.message));
    } catch (e) {
      if (e.response) {
        dispatch(loadingError(e.response.data.message));
      } else {
        dispatch(loadingError('Ooops... Something was wrong'));
      }
    }
  };
};

export const getBoxes = () => async dispatch => {
  try {
    dispatch(isLoading());
    const response = await axios.get(`${API_URL}/box/boxes`,
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    dispatch(setBoxes(response.data));
    dispatch(loadingSuccess(response.data.message));
  } catch (e) {
    if (e.response) {
      dispatch(loadingError(e.response.data.message));
    } else {
      dispatch(loadingError('Ooops... Something was wrong'));
    }
  }
};

export const getBox = id => async dispatch => {
  try {
    dispatch(isLoading());
    const response = await axios.get(`${API_URL}/box/${id}`,
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    const { users, isDraw } = response.data;
    if (isDraw) {
      users.forEach(el => {
        el.recepient = users.find(x => el.recepient === x.user).nameInBox;
      });
    }
    dispatch(setCurrentBox(response.data));
    dispatch(loadingSuccess(response.data.message));
  } catch (e) {
    if (e.response) {
      dispatch(loadingError(e.response.data.message));
    } else {
      dispatch(loadingError('Ooops... Something was wrong'));
    }
  }
};

export const deleteBox = id => async dispatch => {
  try {
    dispatch(isLoading());
    const response = await axios.delete(`${API_URL}/box/${id}/delete-box`,
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    dispatch(loadingSuccess(response.data.message));
  } catch (e) {
    if (e.response) {
      dispatch(loadingError(e.response.data.message));
    } else {
      dispatch(loadingError('Ooops... Something was wrong'));
    }
  }
};

export const deleteUserFromBox = id => async dispatch => {
  try {
    dispatch(isLoading());
    const response = await axios.delete(`${API_URL}/box/${id}/delete-user`,
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    dispatch(getBox(id));
    dispatch(loadingSuccess(response.data.message));
  } catch (e) {
    if (e.response) {
      dispatch(loadingError(e.response.data.message));
    } else {
      dispatch(loadingError('Ooops... Something was wrong'));
    }
  }
};

export const addUserToBox = id => async dispatch => {
  try {
    dispatch(isLoading());
    const response = await axios.put(`${API_URL}/box/${id}/add-user`, { id },
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    dispatch(loadingSuccess(response.data.message));
  } catch (e) {
    if (e.response) {
      dispatch(loadingError(e.response.data.message));
    } else {
      dispatch(loadingError('Ooops... Something was wrong'));
    }
  }
};

export const setPairs = (id, users) => async dispatch => {
  try {
    dispatch(isLoading());
    await axios.post(`${API_URL}/box/${id}/set-pairs`, { users },
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    dispatch(getBox(id));
    dispatch(loadingSuccess(null));
  } catch (e) {
    if (e.response) {
      dispatch(loadingError(e.response.data.message));
    } else {
      dispatch(loadingError('Ooops... Something was wrong'));
    }
  }
};

export const updateBoxSettings = (id, data) => async dispatch => {
  try {
    dispatch(isLoading());
    const response = await axios.put(`${API_URL}/box/${id}/update`, { data },
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    dispatch(getBox(id));
    dispatch(loadingSuccess(response.data.message));
  } catch (e) {
    if (e.response) {
      dispatch(loadingError(e.response.data.message));
    } else {
      dispatch(loadingError('Ooops... Something was wrong'));
    }
  }
};

export const updateBoxUser = (id, data) => async dispatch => {
  try {
    dispatch(isLoading());
    const response = await axios.put(`${API_URL}/box/${id}/update-user`, { data },
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    dispatch(getBox(id));
    dispatch(loadingSuccess(response.data.message));
  } catch (e) {
    if (e.response) {
      dispatch(loadingError(e.response.data.message));
    } else {
      dispatch(loadingError('Ooops... Something was wrong'));
    }
  }
};
