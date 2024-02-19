import axios from "axios";
import {
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
} from "./actionTypes";

export const getProducts = (paramsObj) => (dispatch) => {
  dispatch({ type: PRODUCTS_REQUEST });

  const token = localStorage.getItem("token");

  axios
    .get("https://gifted-erin-bat.cyclic.app/products", paramsObj, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      // console.log(res.data);
      dispatch({ type: PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PRODUCTS_FAILURE });
      // console.log(err);
    });
};

export const deleteProduct = (_id) => (dispatch) => {
  dispatch({ type: PRODUCTS_REQUEST });

  const token = localStorage.getItem("token");

  axios
    .delete(`https://gifted-erin-bat.cyclic.app/products/${_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        //   'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: PRODUCTS_FAILURE });
      console.log(err);
    });
};

export const editProduct = (userData, _id) => (dispatch) => {
  dispatch({ type: PRODUCTS_REQUEST });

  const token = localStorage.getItem("token");

  axios
    .patch(`https://gifted-erin-bat.cyclic.app/products/${_id}`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.log(res);
      dispatch({ type: PRODUCTS_FAILURE });
    });
};

export const postProduct = (userData) => (dispatch) => {
  dispatch({ type: PRODUCTS_REQUEST });

  const token = localStorage.getItem("token");

  axios
    .post("https://gifted-erin-bat.cyclic.app/products", userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      dispatch({type: PRODUCTS_FAILURE})
    });
};
