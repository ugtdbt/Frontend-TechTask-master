import type { Category, State, Action } from "../../utils/Interfaces";
import { ProductActionTypes } from "../actionTypes/productActionTypes";

const initialState: State<{ categories: Category[] }> = {
  data: {
    categories: [],
  },
  error: false,
  loading: false,
};

export default (state = initialState, action: Action<Category[]>): any => {
  switch (action.type) {
    case ProductActionTypes.LIST_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        data: { categories: [] },
        error: false,
      };
    case ProductActionTypes.LIST_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { categories: action.payload },
        error: false,
      };
    case ProductActionTypes.LIST_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        data: { categories: [] },
        error: true,
      };
    default:
      return state;
  }
};
