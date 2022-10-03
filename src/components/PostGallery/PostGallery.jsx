import React from 'react';
import { Card } from 'semantic-ui-react';

import PostCard from '../../components/PostCard/PostCard'


export default function PostGallery({posts, loggedUser, handleDeletePost}){
return (
    <Card.Group>
    {posts.map((post) => {
        return (
        <PostCard 
        post={post}
        key={post._id}
        title={post.title}
        photoUrl={post.photoUrl}
        loggedUser={loggedUser}
        username={post.user.username}
        handleDeletePost={handleDeletePost}
        avatarImg={post.user.photoUrl}
        />
    )}

    )}
    </Card.Group>
)}