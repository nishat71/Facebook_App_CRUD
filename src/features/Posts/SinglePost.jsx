import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faMessage, faShare, faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons'
import EditPost from './EditPost';
import Comments from './Comments';
import { useDispatch } from 'react-redux';
import { likeCountIncrement, likeCountDecrement } from './PostSlice.js';



const SinglePost = ({ post }) => {
    // const { id, postText, comments, likeCount, disabled } = post;
    const { id, post_text, comments, likes, disabled } = post;
    // console.log(likes);


    const [like, setLike] = useState(likes.length > 0 ? likes[0].total_like : 0);
    console.log(like);
    const [isDisabled, setIsDisabled] = useState(disabled);
    console.log(isDisabled);
    const dispatch = useDispatch();


    const handleLikeCount = (id) => {

        // fetch('http://localhost:3333/likes')
        //     .then((response) => response.json())
        //     // .then((json) => console.log(json));
        //     .then((json) => setLikes(json));


        if (likes.length > 0) {
            if (isDisabled == 0) {
                setLike(like + 1)
                setIsDisabled(isDisabled + 1)

                fetch(`http://localhost:3333/likes/${id}`, {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json; charset=UTF-8', },
                    body: JSON.stringify({
                        post_id: id,
                        total_like: like + 1
                    }),
                })
            }
            else {
                setLike(like - 1)
                setIsDisabled(isDisabled - 1)
                fetch(`http://localhost:3333/likes/${id}`, {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json; charset=UTF-8', },
                    body: JSON.stringify({
                        post_id: id,
                        total_like: like - 1
                    }),
                })
            }
        }
        else if (likes.length == 0) {
            if (isDisabled == 0) {
                setLike(like + 1)
                setIsDisabled(isDisabled + 1)

                fetch('http://localhost:3333/likes', {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json; charset=UTF-8', },
                    body: JSON.stringify({
                        post_id: id,
                        total_like: like + 1
                    }),
                })
            }
            else {
                setLike(like - 1)
                setIsDisabled(isDisabled - 1)
                fetch(`http://localhost:3333/likes/${id}`, {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json; charset=UTF-8', },
                    body: JSON.stringify({
                        post_id: id,
                        total_like: like - 1
                    }),
                })
            }
        }



    }
    // const handleLikeCount = (e) => {
    //     dispatch(likeCountIncrement(id))
    //     e.currentTarget.disabled = true;
    // }


    return (
        <div className='single_post'>
            <div className='single_post_text_content'>
                <p>{post_text}</p>
                <EditPost post={post}></EditPost>
            </div>
            <div className='like-comment-content'>
                {
                    like > 0 && <div className='like_count'>
                        <span className='like_icon_btn' >
                            <FontAwesomeIcon className='like_icon' icon={faThumbsUp} />
                        </span>
                        <p>{like}</p>
                    </div>
                }

                {/* <div className='like_count'>
                    <span className='like_icon_btn' >
                        <FontAwesomeIcon className='like_icon' icon={faThumbsUp} />
                    </span>
                    <p>10</p>
                    {
                        likes && likes.map((like) => {
                            console.log(like);
                            const { id, like_count, post_id, profile_id } = like;
                            console.log(like_count);

                            return (
                                <div key={like.id}>
                                    <p>{like_count}</p>
                                </div>
                            )

                        })
                    }
                </div> */}

                <div className='single_post_btm'>
                    <button className='like_btn' onClick={() => handleLikeCount(id)} style={disabled ? { color: '#1677ff' } : { color: '#67656B' }}>
                        <span className='icon-btn'>
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </span>
                        Like
                    </button>
                    <button className='like_btn'>
                        <span className='icon-btn'>
                            <FontAwesomeIcon icon={faMessage} />
                        </span>
                        Comment
                    </button>
                    <button className='like_btn'>
                        <span className='icon-btn'>
                            <FontAwesomeIcon icon={faShare} />
                        </span>
                        share
                    </button>
                </div>
                {/* <Comments comment={comments} key={id}/> */}
                <Comments comment={comments} postId={id} />
            </div>
        </div >
    );
};

export default SinglePost;












// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp, faMessage, faShare, faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons'
// import EditPost from './EditPost';
// import Comments from './Comments';
// import { useDispatch } from 'react-redux';
// import { likeCountIncrement, likeCountDecrement } from './PostSlice.js';



// const SinglePost = ({ post }) => {
//     // const { id, postText, comments, likeCount, disabled } = post;
//     const { id, post_text, comments, like_count, disabled } = post;
//     console.log(post);


//     const [likes, setLikes] = useState(0);
//     const dispatch = useDispatch();


//     const handleLikeCount = (id) => {
//         fetch('http://localhost:3333/likes', {
//             method: "POST",
//             headers: { 'Content-type': 'application/json; charset=UTF-8' },
//             body: JSON.stringify({
//                 post_id: id,
//                 like_count: likes,
//             }),
//         })
//             .then((res) => res.json())
//             .then((json) => setLikes(json));


//         // if (likes.length > 0) {
//         //     fetch(`http://localhost:3333/likes/${id}`, {
//         //         method: "POST",
//         //         headers: { 'Content-type': 'application/json; charset=UTF-8' },
//         //         body: JSON.stringify({
//         //             post_id: id,
//         //             like_count: likes + 1,
//         //         }),
//         //     })
//         //         .then((res) => res.json())
//         //         .then((json) => setLikes(json));
//         // }
//         // else {
//         //     fetch('http://localhost:3333/likes', {
//         //         method: "POST",
//         //         headers: { 'Content-type': 'application/json; charset=UTF-8' },
//         //         body: JSON.stringify({
//         //             post_id: id,
//         //             like_count: likes + 1,
//         //         }),
//         //     })
//         //         .then((res) => res.json())
//         //         .then((json) => setLikes(json));
//         // }



//     }
//     // const handleLikeCount = (e) => {
//     //     dispatch(likeCountIncrement(id))
//     //     e.currentTarget.disabled = true;
//     // }


//     return (
//         <div className='single_post'>
//             <div className='single_post_text_content'>
//                 <p>{post_text}</p>
//                 <EditPost post={post}></EditPost>
//             </div>
//             <div className='like-comment-content'>
//                 {/* {
//                     likeCount > 0 && <div className='like_count'>
//                         <span className='like_icon_btn' >
//                             <FontAwesomeIcon className='like_icon' icon={faThumbsUp} />
//                         </span>
//                         <p>{likes}</p>
//                     </div>
//                 } */}
//                 <div className='like_count'>
//                     <span className='like_icon_btn' >
//                         <FontAwesomeIcon className='like_icon' icon={faThumbsUp} />
//                     </span>
//                     <p>10</p>
//                     {
//                         likes.map((like) => <p>{like.likes}</p> )
//                     }
//                 </div>

//                 <div className='single_post_btm'>
//                     <button className='like_btn' onClick={() => handleLikeCount(id)} style={disabled ? { color: '#1677ff' } : { color: '#67656B' }}>
//                         <span className='icon-btn'>
//                             <FontAwesomeIcon icon={faThumbsUp} />
//                         </span>
//                         Like
//                     </button>
//                     <button className='like_btn'>
//                         <span className='icon-btn'>
//                             <FontAwesomeIcon icon={faMessage} />
//                         </span>
//                         Comment
//                     </button>
//                     <button className='like_btn'>
//                         <span className='icon-btn'>
//                             <FontAwesomeIcon icon={faShare} />
//                         </span>
//                         share
//                     </button>
//                 </div>
//                 {/* <Comments comment={comments} key={id}/> */}
//                 <Comments comment={comments} postId={id} />
//             </div>
//         </div>
//     );
// };

// export default SinglePost;