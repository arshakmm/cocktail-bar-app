import axios from "axios";
import React from "react";
import { setLoading, setProducts } from "../action/productAction";



 const getProducts = () => (dispatch) => {
    dispatch(setLoading(true))
   axios
  .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then((response) => {
    dispatch(setProducts(response.data.drinks[0]));
    dispatch(setLoading(false))
  })
  .catch((err) => {
    console.log("Err: ", err);
  })
}

export default getProducts