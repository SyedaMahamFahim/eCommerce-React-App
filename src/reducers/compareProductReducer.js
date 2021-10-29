import {
    ADD_TO_COMPARE_PRODUCT_LIST,
    REMOVE_COMPARE_PRODUCT_LIST_ITEM,
  } from "../constants/compareProductConstants";
  
  export const compareProductlistReducer = (
    state = { compareProductListItems: [] },
    action
  ) => {
    switch (action.type) {
      case ADD_TO_COMPARE_PRODUCT_LIST:
        const item = action.payload;
  
        const isItemExist = state.compareProductListItems.find(
          (i) => i.product === item.product
        );
  
        if (isItemExist) {
          return {
            ...state,
            compareProductListItems: state.compareProductListItems.map((i) =>
              i.product === isItemExist.product ? item : i
            ),
          };
        } else {
          return {
            ...state,
            compareProductListItems: [...state.compareProductListItems, item],
          };
        }
  
      case REMOVE_COMPARE_PRODUCT_LIST_ITEM:
        return {
          ...state,
          compareProductListItems: state.compareProductListItems.filter((i) => i.product !== action.payload),
        };
  
  
      default:
        return state;
    }
  };