import {
  ADD_TO_COMPARE_PRODUCT_LIST,
  REMOVE_COMPARE_PRODUCT_LIST_ITEM,
} from "../constants/compareProductConstants";

import axios from "axios";

// Add to Wishlist
export const addItemsToCompareProductlist = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/products/product/${id}`);

  dispatch({
    type: ADD_TO_COMPARE_PRODUCT_LIST,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.images[0].url,
      stock: data.product.Stock,
    },
  });

  localStorage.setItem(
    "compareProductListItems",
    JSON.stringify(getState().compareProductlist.compareProductListItems)
  );
};

// REMOVE FROM WISHLIST
export const removeItemsFromCompareProductlist = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_COMPARE_PRODUCT_LIST_ITEM,
    payload: id,
  });

  localStorage.setItem(
    "compareProductListItems",
    JSON.stringify(getState().compareProductlist.compareProductListItems)
  );
};
