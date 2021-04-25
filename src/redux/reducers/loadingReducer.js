const LOADING_SUCCESS = 'LOADING_SUCCESS';
const LOADING_ERROR = 'LOADING_ERROR';
const CLEAR_ERROR = 'CLEAR_ERROR';
const CLEAR_MESSAGE = 'CLEAR_MESSAGE';
const LOADING_DATA = 'LOADING_DATA';

export const loadingSuccess = message => ({ type: LOADING_SUCCESS, payload: message });
export const loadingError = error => ({ type: LOADING_ERROR, payload: error });
export const isLoading = () => ({ type: LOADING_DATA });
export const clearError = () => ({ type: CLEAR_ERROR });
export const clearMessage = () => ({ type: CLEAR_MESSAGE });

const initialState = {
  isLoadingData: false,
  fetchError: false,
  dataMessage: '',
  errorMessage: ''
};

export function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        isLoadingData: true
      };
    case LOADING_SUCCESS:
      return {
        ...state,
        dataMessage: action.payload,
        isLoadingData: false
      };
    case LOADING_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        isLoadingData: false,
        fetchError: true
      };
    case CLEAR_ERROR:
      return {
        ...state,
        errorMessage: null
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        dataMessage: null
      };
    default:
      return state;
  }
}

