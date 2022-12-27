import { setIngridientsModal } from "./productAction"

const getIngridientsModal =(isModal) =>(dispatch)=> {
    dispatch(setIngridientsModal(isModal))
}

export default getIngridientsModal