import React, { useState } from 'react'
import SingleComment from './SingleComment';
import { useDispatch } from 'react-redux';
import { addComment, showPosts } from './PostSlice';
import { v4 as uuidv4 } from 'uuid';


const Comments = (props) => {
    const { comment, postId } = props;
    // console.log(comment, postId);


    // const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const dispatch = useDispatch()
    const isCommentTextDisabled = comments.length === 0;



    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        // const commentDetails = { commentId: uuidv4(), postId: postId, commentText: comments }
        // dispatch(addComment(commentDetails));
        // setComments("");
        const commentPost = await fetch('http://localhost:3333/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id: postId,
                comment_text: comments
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        const response = await fetch('http://localhost:3333/posts')
        const data = await response.json();
        dispatch(showPosts(data))
        setComments("")
    }

    
    return (
        <div>
            <div className='comment_section'>
                <form className='comment_content' onSubmit={handleCommentSubmit}>
                    <input type="text" className='comment_field' placeholder='Write a Comment.....' value={comments} onChange={(e) => setComments(e.target.value)} />
                    {
                        comments &&
                        <button type='submit' className='comment_btn' disabled={isCommentTextDisabled}>Send</button>
                    }
                </form>
                <div className='comment-show'>
                    {
                        // comment.map((singleCmnt) => <SingleComment singleCmnt={singleCmnt} key={singleCmnt.commentId}></SingleComment>)
                        comment.map((singleCmnt, index) => <SingleComment singleCmnt={singleCmnt} key={index}></SingleComment>)
                    }

                </div>
            </div>
        </div>
    )
}
export default Comments



