import style from "./modal.module.css"
import { useDispatch } from "react-redux/es/exports"
import getIngridientsModal from "../../../action/getIngridientModal"

const Modal = () => {
    const dispatch = useDispatch()
    const hideModal = ()  => {
        dispatch(getIngridientsModal(false))
    }
    
    return <div className={style.modalOoverlay}>
              <div className={style.modal}>
                <div className={style.buttonWrapper}>
                     <button className={style.closeButton} onClick={hideModal  }>X</button>
                </div>
               
                <div>
                  This is my new modal!    
                </div>
              
                </div>
              
        </div>
}
export default Modal