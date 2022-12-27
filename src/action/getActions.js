import axios from "axios";
import React from "react";
import { setLoading, setProducts } from "../action/productAction";

 const getProducts = () => (dispatch) => {
    dispatch(setLoading(true))
   axios
  .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then((response) => {
    dispatch(setProducts(response.data.drinks[0]));
    setTimeout(() => {
      dispatch(setLoading(false))
    }, 2000); 
  })
  .catch((err) => {
    console.log("Err: ", err);
  })
}

export default getProducts