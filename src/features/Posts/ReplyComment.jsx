import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faUser } from '@fortawesome/free-solid-svg-icons';


const ReplyComment = (props) => {
    const { commentId, postId, replyId, replyText } = props.replies;
    // console.log(replyText);

    const [isLike, setIsLike] = useState(false);

    return (
        <div className='reply_comment'>
            <div className='user_profile'><FontAwesomeIcon className='profile_icon' icon={faUser} /></div>
            <div className='reply_comment_body'>
                <p className='reply_comment_text'>{replyText}
                    {
                        isLike &&
                        <span className='single_comment_like'><FontAwesomeIcon className='single_comment_like_icon' icon={faThumbsUp} /></span>
                    }
                </p>
                <div>
                    <button className='like_reply_btn' onClick={() => setIsLike(!isLike)} style={isLike ? { color: '#1677ff' } : { color: '#67656B' }}>Like</button>
                    <button className='like_reply_btn'>Reply</button>
                </div>
            </div>
        </div>
    );
};

export default ReplyComment;
