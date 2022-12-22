import { useDispatch, useSelector } from 'react-redux'
import style from './header.module.css' 

export const Header =()=> {
    const ingridientsModal = useSelector((state) =>state.modal)
    const dispatch =useDispatch()


    return <div>
        <div className={style.container}>
           <div className={style.wrapperLogo}>
           <img src='https://media.istockphoto.com/id/829400114/vector/bright-vector-illustration-of-a-cocktail-bar-the-original-sign-for-institution.jpg?b=1&s=612x612&w=0&k=20&c=Tf6Ec_DqygDMyVpbHo5-7r7QFlggwLkMNAEocC94cRA='/>
           </div> 
           <div className={style.wrapperMenu}>
            <button className={style.ingridientsModal}>Ingridient</button> 
           </div>
        </div>
    </div>
    
}