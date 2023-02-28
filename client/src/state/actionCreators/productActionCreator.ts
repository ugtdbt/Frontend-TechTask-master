import type { Category, Action } from "../../utils/Interfaces";
import { ProductActionTypes } from "../actionTypes/productActionTypes";
import type { Dispatch } from "redux";

export const setCategories = (category: any) => {
  return (dispatch: Dispatch<Action<Category[]>>) => {
    dispatch({
      type: ProductActionTypes.LIST_PRODUCTS_SUCCESS,
      payload: category,
    });
  };
};

export const errorCategories = () => {
  return (dispatch: Dispatch<Action<Category[]>>) => {
    dispatch({
      type: ProductActionTypes.LIST_PRODUCTS_FAILURE,
    });
  };
};

export const requestCategories = () => {
  return (dispatch: Dispatch<Action<Category[]>>) => {
    dispatch({
      type: ProductActionTypes.LIST_PRODUCTS_REQUEST,
    });
  };
};
