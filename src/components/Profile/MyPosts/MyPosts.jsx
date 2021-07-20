
import s from './MyPosts.module.css';
import Posts from './Post/Posts';



const MyPosts = (props) => {
    console.log(props.hey)
    return (

        
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Send</button>
            </div>
            <div className={s.posts}>

                <Posts message="Hi, how are you?" />
                <Posts message="It's my first post!" />
                <Posts message="It's cool" />

            </div>
        </div>

    )
}

export default MyPosts