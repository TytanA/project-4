import React, { useState, useEffect } from 'react';

import PageHeader from '../../components/Header/Header';
import AddPost from '../../components/AddPost/AddPost'
import PostGallery from '../../components/PostGallery/PostGallery'

import {  Grid } from 'semantic-ui-react'

import * as postsAPI from '../../utils/postApi'

export default function Feed({ loggedUser, handleLogout}) {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');


async function handleAddPost(post) {

    try {
        const response = await postsAPI.create(post)
        setPosts([response.data, ...posts]);
    }catch (err) {
        setError('Error creating post, please try again')
    }
}


useEffect(() => {

    async function getPosts() {
        try{
            const response = await postsAPI.getAll();
            setPosts([...response.data])
            console.log('response')
        }catch (err) {
            console.log(err, "this is the error")
        }
    }

    getPosts();
    console.log("this is the useEffect firing")
}, [])

return (
    <Grid centered>
        <Grid.Row>
            <Grid.Column>
                <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <AddPost handleAddPost={handleAddPost}/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column style={{ maxWidth: 450 }}>
                <PostGallery posts={posts}/>
            </Grid.Column>
         </Grid.Row>







    </Grid>
)


}