import { setIngridientsModal } from "./productAction"



const getIngridientsModal =() =>(dispatch)=> {
    dispatch(setIngridientsModal(true))

}

export default getIngridientsModal