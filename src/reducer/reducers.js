import React from "react";
import { actionType,  } from "../actionType/action-type";
const initState = {
  products: [],
  loading: false
};

export const productsReducer = (state = initState, { payload ,type}) => {
 switch(type){
  case actionType.SHOW_COCKTAIL_BAR:
    return { ...state, products: payload };
    case actionType.SHOW_LOADING:
        return { ...state, loading: payload };
    default:
      return state;
 }
};

