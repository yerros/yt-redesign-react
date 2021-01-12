import { SET_THEME, SET_TOOGLE } from "./types";

export const setTheme = (payload) => ({
  type: SET_THEME,
  payload,
});

export const setToogle = (payload) => ({
  type: SET_TOOGLE,
  payload,
});
