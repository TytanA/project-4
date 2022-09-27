import React from 'react';

import PostCard from '../../components/PostCard/PostCard'


export default function PostGallery(props){
    return(
    <>
    <h1>This is the Post Gallery</h1>
    <PostCard posts={props.posts} />
    </>
    )
}