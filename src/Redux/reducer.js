import * as actionTypes from "./actions";

const initialState = { countriesData: {}, searchQuery: "", isError: false };

export const country = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_COUNTRY_DATA: {
      const updatedState = {
        ...state,
        ...action.payload,
      };
      return updatedState;
    }

    case actionTypes.INPUT_CHANGED: {
      const updatedState = {
        ...state,
        ...action.payload,
      };
      return updatedState;
    }

    case actionTypes.ON_ERROR: {
      const updatedState = {
        ...state,
        ...action.payload,
      };
      return updatedState;
    }

    default:
      return state;
  }
};
