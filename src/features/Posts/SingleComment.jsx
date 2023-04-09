import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faUser } from '@fortawesome/free-solid-svg-icons';
import ReplyComment from './ReplyComment';
import AddSingleReply from './AddSingleReply';


const SingleComment = ({ singleCmnt }) => {
    const {id, commentId, comment_text, post_id, reply } = singleCmnt;
    // console.log(singleCmnt)
    // console.log(reply);

    const [isLike, setIsLike] = useState(false);
    const [isReplying, setIsReplying] = useState(false);

    return (
        <div className='single_comment'>
            <div className='user_profile'><FontAwesomeIcon className='profile_icon' icon={faUser} /></div>
            <div className='comment_body'>
                <p className='single_comment_text'>{comment_text}
                    {
                        isLike &&
                        <span className='single_comment_like'><FontAwesomeIcon className='single_comment_like_icon' icon={faThumbsUp} /></span>
                    }
                </p>
                <div>
                    <button className='like_reply_btn' onClick={() => setIsLike(!isLike)} style={isLike ? { color: '#1677ff' } : { color: '#67656B' }}>Like</button>
                    {
                        isReplying ?
                            <button className='like_reply_btn' onClick={() => setIsReplying(!isReplying)}>Cancel</button>
                            :
                            <button className='like_reply_btn' onClick={() => setIsReplying(!isReplying)}>Replyme</button>
                    }
                </div>
                <div className='reply-show'>
                    {
                        reply &&
                        reply.map((replies) => <ReplyComment replies={replies} key={replies.replyId}></ReplyComment>)
                    }
                </div>
                {/* comment-reply */}
                {
                    isReplying && <AddSingleReply addReply={reply} post_id={post_id} comment_id={id}/>
                }
            </div>
        </div>
    )
}

export default SingleComment









// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp, faUser } from '@fortawesome/free-solid-svg-icons';
// import ReplyComment from './ReplyComment';
// import Link from 'antd/es/typography/Link';


// const SingleComment = ({ singleCmnt }) => {
//     const { commentId, commentText, postId, reply } = singleCmnt;
//     // console.log(singleCmnt)
//     console.log(reply);
//     const [isLike, setIsLike] = useState(false);


//     return (
//         <div className='single_comment'>
//             <div className='user_profile'><FontAwesomeIcon className='profile_icon' icon={faUser} /></div>
//             <div className='comment_body'>
//                 <p className='single_comment_text'>{commentText}
//                     {
//                         isLike &&
//                         <span className='single_comment_like'><FontAwesomeIcon className='single_comment_like_icon' icon={faThumbsUp} /></span>
//                     }
//                 </p>
//                 <div>
//                     <button className='like_reply_btn' onClick={() => setIsLike(!isLike)}>Like</button>
//                     <button className='like_reply_btn'>Reply</button>
//                 </div>

//                 {
//                     reply &&
//                     reply.map((replies) => <ReplyComment replies={replies} key={replies.replyId}></ReplyComment>)
//                 }
//             </div>
//         </div>
//     )
// }

// export default SingleComment
