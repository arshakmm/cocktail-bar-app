import style from './footer.module.css'

const Footer =() =>{
    return <div>
        <div className={style.footerContainer}>
            <div className={style.footerContacts}>
                Contacts
                 <div className={style.footerWrapper}>
                    <div>Address.  Yerevan/Tumanyan str./25</div>
                    <div>Phone  +374-77-600-700</div>
                </div>
            </div>
           
            <iframe className={style.barLocation} width="400" height="150" id="gmap_canvas" src="https://maps.google.com/maps?q=yerevan,tumanyan%2025&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>       
    </div>
}

export default Footer