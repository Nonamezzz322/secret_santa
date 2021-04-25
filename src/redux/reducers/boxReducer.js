const SET_BOXES = 'SET_BOXES';
const SET_CURRENT_BOX = 'SET_CURRENT_BOX';

export const setBoxes = data => ({ type: SET_BOXES, payload: data });
export const setCurrentBox = data => ({ type: SET_CURRENT_BOX, payload: data });
const initialState = {
  boxesList: [],
  currentBox: {}
};

export function boxReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BOXES:
      return {
        ...state,
        boxesList: [...action.payload]
      };
    case SET_CURRENT_BOX: {
      return {
        ...state,
        currentBox: action.payload
      };
    }
    default:
      return state;
  }
}

