export const INIT_COUNTRY_DATA = "INIT_COUNTRY_DATA";
export const initCountryData = (value) => ({
  type: INIT_COUNTRY_DATA,
  payload: value,
});

export const INPUT_CHANGED = "INPUT_CHANGED";
export const inputChanged = (value) => ({
  type: INPUT_CHANGED,
  payload: value,
});

export const ON_ERROR = "ON_ERROR";
export const onError = (value) => ({
  type: ON_ERROR,
  payload: value,
});

export const GET_ALL_COUNTRY = "GET_ALL_COUNTRY";
export const getAllCountry = () => ({
  type: GET_ALL_COUNTRY,
});

export const IMPLEMENT_SEARCH_QUERY = "IMPLEMENT_SEARCH_QUERY";
export const implementSearchQuery = () => ({
  type: IMPLEMENT_SEARCH_QUERY,
});
