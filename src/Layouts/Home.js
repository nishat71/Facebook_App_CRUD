import React from 'react';
import PostView from '../features/Posts/PostView';
import AddPost from '../features/Posts/AddPost';

const Home = () => {
    return (
        <div className='home'>
            <div className='container'>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mx-auto">
                        <AddPost/>
                        <PostView />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;



