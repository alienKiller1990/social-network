
import s from './MyPosts.module.css';
import Posts from './Post/Posts';



const MyPosts = (props) => {

    let posts = [
        { id: 1, message: 'Hi, how are you?', likesCount: 0 },
        { id: 2, message: "It's my first post!", likesCount: 9 },
        { id: 3, message: "It's cool", likesCount: 34 },

    ];

    let postsElements = posts.map(p => {
        return <Posts message={p.message} likesCount={p.likesCount} />
    });

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
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts