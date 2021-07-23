import s from './ProfileInfo.module.css'
import img_we from './../../images/coding.jpg';



const ProfileInfo = (props) => {
    return (
        <div>
            <div>
            <img src={img_we} />

            </div>
            <div className={s.descriptionBlock}>
            ava + descr

            </div>

        </div>
    )
}

export default ProfileInfo