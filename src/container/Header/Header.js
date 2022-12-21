import style from './header.module.css' 

export const Header =()=> {
    return <div>
        <div className={style.container}>
           <div className={style.wrapperTitle}>Cocktail bar</div> 
           <div className={style.wrapperMenu}>
            <div>Ingridient</div>
          
           </div>
           


        </div>
    </div>
    
}