import style from './footer.module.css'

const Footer =() =>{
    return <div>

        <div className={style.footerContainer}>
            <div className={style.footerContacts}>
                Contacts


            </div>
            <div className={style.footerWrapper}>
                 <div>Address.  Yerevan/Tumanyan str./25</div>
                 <div>Phone  +374-77-777-77</div>
                 

            </div>


        </div>
        
    </div>
}

export default Footer