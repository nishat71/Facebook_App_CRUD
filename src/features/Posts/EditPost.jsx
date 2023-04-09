import React, { useState } from 'react';
import { Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { deletePosts, showPosts, updatePosts } from './PostSlice';

const EditPost = (props) => {
    const { id, post_text } = props.post
    // console.log(props);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editPost, setEditPost] = useState(post_text);
    const dispatch = useDispatch();
    // const [isDeleted, setIsDeleted] = useState('false');


    const showModal = () => {
        setIsModalOpen(true);
    };


    const handleOk = async (e) => {
        e.preventDefault();
        // dispatch(updatePosts({ id, postText: editPost }));

        const postEdit = await fetch(`http://localhost:3333/posts/${id}`, {
            method: 'POST',
            body: JSON.stringify({
                post_text: editPost,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })


        const response = await fetch('http://localhost:3333/posts')
        const data = await response.json();
        dispatch(showPosts(data))
        setIsModalOpen(false);
    };


    const handleCancel = () => {
        setIsModalOpen(false);
    };




    const handleDeletePost = async (id) => {
        if (window.confirm('Are you sure that you want to delete??')) {
            // dispatch(deletePosts(id));
            const deletePost = await fetch(`http://localhost:3333/posts/${id}`, {
                method: 'DELETE',
            })

            const response = await fetch('http://localhost:3333/posts')
            const data = await response.json();
            dispatch(showPosts(data))

            // Swal.fire(
            //     'You clicked the button!',
            //     'Successfully Deleted!'
            // )
        }
    }


    return (
        <>
            <div className='edit-dlt-grp'>
                <button className='btn edit-btn' onClick={showModal}><FontAwesomeIcon icon={faEllipsis} /></button>
                <button className='btn dlt-btn' onClick={() => handleDeletePost(id)}><FontAwesomeIcon icon={faXmark} /></button>
            </div>
            <Modal title="Edit Post" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Edit Post">
                <input type="text" className='input-field' value={editPost} onChange={(e) => setEditPost(e.target.value)} />
            </Modal>
        </>
    );
};

export default EditPost;

