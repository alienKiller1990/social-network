
import img_we from './../images/coding.jpg';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';



const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img src={img_we} />
            </div>

            <div>
                ava + descr
            </div>

            <MyPosts hey='you!' />
        </div>
    )
}

export default Profile