import axios from "axios";
import * as actionCreators from "./actions";

export const getAllCountry = () => async (dispatch, getState) => {
  axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
    dispatch(
      actionCreators.initCountryData({
        ...getState().country,
        countriesData: res.data,
        isError: false,
      })
    );
  });
};

export const getSearchedCountry = () => async (dispatch, getState) => {
  axios
    .get(
      `https://restcountries.eu/rest/v2/name/${getState().country.searchQuery}`
    )
    .then((res) => {
      dispatch(
        actionCreators.initCountryData({
          ...getState().country,
          countriesData: res.data,
          isError: false,
        })
      );
    })
    .catch(() => {
      console.log("Error");
      dispatch(
        actionCreators.onError({
          ...getState().country,
          countriesData: {},
          isError: true,
        })
      );
    });
};
