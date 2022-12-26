import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import getProducts from "../../../../action/getActions"

const IngridientsModal =() =>{
    const ingridients = useSelector((state) => state.products)

    const ingrid = Object.keys(ingridients)

    // const ii= ingrid.forEach(elem => elem.includes('strIngredient'))
    let ss = ingrid.includes('strIngredient')

    console.log(ss)

    return <div>
       <div >
        <div >ingridient </div>


       </div>
    </div>
}


export default IngridientsModal