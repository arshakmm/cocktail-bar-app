import { useDispatch, useSelector } from 'react-redux'
import getIngridientsModal from '../../action/getIngridientModal'
import style from './header.module.css' 
import Modal from './Modal/Modal'

export const Header =()=> {
    const ingridientsModal = useSelector((state) =>state.isModal)
    console.log("ingridientsModal",ingridientsModal);
    const dispatch = useDispatch()
    const showModal = () => {
        dispatch(getIngridientsModal(true))
        
    }
    return <div className= {style.header}>
        <div className={style.container}>
           <div className={style.wrapperLogo}>
           <img src='https://media.istockphoto.com/id/829400114/vector/bright-vector-illustration-of-a-cocktail-bar-the-original-sign-for-institution.jpg?b=1&s=612x612&w=0&k=20&c=Tf6Ec_DqygDMyVpbHo5-7r7QFlggwLkMNAEocC94cRA='/>
           </div> 
           <div className={style.wrapperMenu}>
            <button className={style.ingridientsModal} onClick={showModal}>Ingridient</button> 
            {ingridientsModal && <Modal/> }
           </div>
        </div>
    </div>
}