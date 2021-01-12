import { SET_THEME, SET_TOOGLE } from "../actions/types";

const initialState = {
  theme: "lightMode",
  toggleNavbar: "",
};

const theme = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_THEME:
      return {
        ...state,
        theme: payload,
      };
    case SET_TOOGLE:
      return {
        ...state,
        toggleNavbar: payload,
      };
    default:
      return state;
  }
};

export default theme;
