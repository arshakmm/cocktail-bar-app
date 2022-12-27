import { useEffect, useState } from "react"
import {  useSelector } from "react-redux"

const IngridientsModal =() =>{
    const ingridients = useSelector((state) => state.products)
    const [currentIngridients, setCurrentIngredients] = useState([])

    useEffect (() =>{
        if(ingridients){
            let local =[]
            let ingr = Object.keys(ingridients)
              ingr.forEach((element) => {
                if(element.includes('strIngredient')) {
                    if(ingridients[element]){
                        local.push(ingridients[element])
                    }
                }
              } )
              setCurrentIngredients(local)
        }
    },[ingridients])

    return <div>
       <div >
          <ol>{currentIngridients.map(ingridentList => <li>{ingridentList}</li>)}</ol>
       </div>
    </div>
}


export default IngridientsModal