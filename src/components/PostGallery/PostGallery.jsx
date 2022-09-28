import React from 'react';
import { Card } from 'semantic-ui-react';

import PostCard from '../../components/PostCard/PostCard'


export default function PostGallery({posts}){
return (
    <Card.Group>
    {posts.map((post) => {
        return (
        <PostCard 
        post={post}
        key={post._id}
        title={post.title}
        photoUrl={post.photoUrl}
        />
    )}

    )}
    </Card.Group>
)}