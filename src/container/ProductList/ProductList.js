import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "../../action/getActions";
import style from './productList.module.css'

const ProductList= () => {
    const products = useSelector((state) => state.products);
    const loading = useSelector((state) => state.loading);

    const dispatch = useDispatch();
    const showProducts =()=>{
        dispatch(getProducts());
    }
  
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    
    console.log(products)
    return (<div className={style.cocktailProducts}> 
        <button onClick={showProducts} >Show drinks</button>
        {loading ?(
        <div>...Loading</div>
      ) : (
       <div key={products.idDrink}>
          <div>
            <div className={style.containerProducts}>
              <div>
                <img className={style.cocktailsImg} src={products.strDrinkThumb} alt={products.strDrink} />
              </div>
              <div>
                <div>{products.strDrink}</div>
                <div>{products.strCategory}</div>
                <div>{products.strInstructions}</div>
              </div>
            </div>
          </div>
      </div>
      )}
    </div>
  );
}

export default ProductList

