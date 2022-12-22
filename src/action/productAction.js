import { actionType } from "../actionType/action-type";


export const setProducts = (products) => {
    return {
      type: actionType.SHOW_COCKTAIL_BAR,
      payload: products,
    };
  };

  export const setLoading = (loading) => {
    return {
      type: actionType.SHOW_LOADING,
      payload: loading,
    };
  };

  export const setIngridientsModal = (ismodal) => {
    return {
      type: actionType.SHOW_INGRIDIENTS,
      payload: ismodal,
    }
  } 