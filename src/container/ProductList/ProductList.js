import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "../../action/getActions";
import style from './productList.module.css'

const ProductList= () => {
    const products = useSelector((state) => state.products);
    const loading = useSelector((state) => state.loading);
    const dispatch = useDispatch();
    const showProducts =()=>{
     dispatch(getProducts())
    }
  
    useEffect(() => {
      dispatch(getProducts())
    }, []);
    
    console.log(products)
    return (<div className={style.cocktailProducts}> 
        {loading ?(
        <div><img className={style.shakerLoader} src="https://img.freepik.com/free-icon/cocktail_318-402291.jpg?w=2000"/></div>
      ) : (
       <div key={products.idDrink}>
          <div>
            <div className={style.containerProducts}>
              <div className={style.uu}>
                <img className={style.cocktailsImg} src={products.strDrinkThumb} alt={products.strDrink} />
              </div>
              <div className={style.informetionDitils}>
                <div>Name : {products.strDrink}</div>
                <div>Category : {products.strCategory}</div>
                <div>Instructions : {products.strInstructions}</div>
              </div>
            </div>
          </div>
            <button className={style.buttonWraper} onClick={showProducts} >Get drinks</button>
      </div>
      
      )}
     
    </div>
  );
}

export default ProductList

