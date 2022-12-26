import style from "./modal.module.css"
import { useDispatch, useSelector } from "react-redux/es/exports"
import getIngridientsModal from "../../../action/getIngridientModal"
import IngridientsModal from "./IngridientsModal/IngridientsModal"
import { useEffect, useRef } from "react"

const Modal = () => {
    const dispatch = useDispatch()
    const hideModal = ()  => {
        dispatch(getIngridientsModal(false))
    }
    const modal = useSelector((state) => state.isModal)

     const ingridient = useSelector((state) => state)
     console.log(ingridient)

    useEffect(() => {
      if (modal) {
        document.body.style.overflow = 'hidden';
      }
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [modal]);

    let menuRef =useRef()

    useEffect(() =>{
      let closerModal = (e) =>{
        if(!menuRef.current.contains(e.target)) {
          hideModal()
        }
      }
      document.addEventListener('mousedown',closerModal);

      return () =>{
        document.addEventListener('mousedown',closerModal);
      }
    })
    
    return <div className={style.modalOoverlay} >
              <div className={style.modal} ref={menuRef}>
                <div className={style.buttonWrapper}>
                     <button className={style.closeButton} onClick={hideModal}>X</button>
                </div>
               
                <div>
                  This is my new modal!  
                    <IngridientsModal/>
                </div>
              
                </div>
              
        </div>
}
export default Modal