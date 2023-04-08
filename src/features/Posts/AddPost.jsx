import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addPosts } from './PostSlice';


const AddPost = () => {
    const [newPosts, setNewPosts] = useState("");
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();

        // const post = { id: uuidv4(), postText: newPosts, comments: [], likeCount: 0, disabled: false };
        // dispatch(addPosts(post));
        // setNewPosts('');
        fetch('http://localhost:3333/posts', {
            method: "POST",
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            body: JSON.stringify({
                user_id: 10,
                post_text: newPosts,
                disabled: 'false',
                like_count: 20,
            }),
        })
            .then((res) => res.json())
            .then((json) => console.log(json));
    }
    return (
        <div className='post-container'>
            <h2 className='post-title'>Create post</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className='form-field'>
                    <input type="text" placeholder='Want to post something?....' value={newPosts} onChange={(e) => setNewPosts(e.target.value)} required />
                </div>
                <div className='btn_group'>
                    <button className='btn submit_btn'>Create Post</button>
                </div>
            </form>

        </div>
    );
};

export default AddPost;
