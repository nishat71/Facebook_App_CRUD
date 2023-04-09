import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialPosts = {
    // posts: [
    //     {
    //         id: uuidv4(),
    //         postText: "Humaira Akila Nishat...",
    //         likeCount: 0,
    //         disabled: false,
    //         comments: [
    //             {
    //                 postId: 1,
    //                 commentId: 1,
    //                 commentText: "first comment here",
    //                 reply: [
    //                     {
    //                         postId: 1,
    //                         commentId: 1,
    //                         replyId: 1,
    //                         replyText: "first comment replied here",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         id: uuidv4(),
    //         postText: "Lorem Ipsum is simply dummy text of the printing, Lorem Ipsum is simply dummy text of the printing,",
    //         likeCount: 0,
    //         disabled: false,
    //         comments: [
    //             {
    //                 postId: 2,
    //                 commentId: 2,
    //                 commentText: "second comment here",
    //                 reply: [
    //                     {
    //                         postId: 2,
    //                         commentId: 2,
    //                         replyId: 2,
    //                         replyText: "second comment replied here",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    // ],
};

export const postSlice = createSlice({
    name: "posts",
    initialState: initialPosts,
    reducers: {
        // showPosts: (state) => state,
        showPosts: (state, action) => {
            state.posts=action.payload
        },
        addPosts: (state, action) => {
            state.posts.unshift(action.payload)
        },
        deletePosts: (state, action) => {
            const id = action.payload;
            state.posts = state.posts.filter((post) => post.id !== id);
        },
        updatePosts: (state, action) => {
            const { id, postText } = action.payload;
            const isPostExist = state.posts.filter((post) => post.id === id);

            if (isPostExist) {
                isPostExist[0].postText = postText;
            }
        },
        likeCountIncrement: (state, action) => {
            const id = action.payload;
            const isPostExist = state.posts.filter((post) => post.id == id);

            if (isPostExist) {
                isPostExist[0].likeCount = isPostExist[0].likeCount + 1;
                isPostExist[0].disabled = true;
            }

        },
        likeCountDecrement: (state, action) => {
            const id = action.payload;
            const isPostExist = state.posts.filter((post) => post.id == id);

            if (isPostExist) {
                isPostExist[0].likeCount = isPostExist[0].likeCount - 1;
                isPostExist[0].disabled = false;
            }

        },
        addComment: (state, action) => {
            const { postId, commentId, commentText } = action.payload;
            const isPostExist = state.posts.filter((post) => post.id === postId);

            if (isPostExist) {
                isPostExist[0].comments.unshift(action.payload)
            }
        },
        addReply: (state, action) => {
            const { postId, commentId, replyId, replyText } = action.payload;

            // const { postId, commentId, replyId, replyText } = action.payload;
            // const isPostExist = state.posts.filter((post) => post.id == commentId);

            // if (isPostExist) {
            //     isPostExist[0].reply.push(action.payload)
            // }
        }
    }
})

export const { showPosts, addPosts, deletePosts, updatePosts, addComment, likeCountIncrement, likeCountDecrement, addReply } = postSlice.actions;
export default postSlice.reducer;