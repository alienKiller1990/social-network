
import s from './MyPosts.module.css';
import Posts from './Post/Posts';



const MyPosts = (props) => {

    return (

        <div className={s.postsBlocks}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
            <div className={s.posts}>

                <Posts message="Hi, how are you?" likesCount = "0"/>
                <Posts message="It's my first post!" likesCount = "9"/>
                <Posts message="It's cool" likesCount = "45"/>

            </div>
        </div>

    )
}

export default MyPosts