import React, { useState, useEffect } from 'react';

import "./Feed.css";

import PageHeader from '../../components/Header/Header';
import AddPost from '../../components/AddPost/AddPost'
import PostGallery from '../../components/PostGallery/PostGallery'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

import { Grid } from 'semantic-ui-react'

import * as postsAPI from '../../utils/postApi'

export default function Feed({ loggedUser, handleLogout }) {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');


    async function handleAddPost(post) {

        try {
            const response = await postsAPI.create(post)
            setPosts([response.data, ...posts]);
            getPosts()
        } catch (err) {
            setError('Error creating post, please try again')
        }
    }

    async function getPosts() {
        try {
            const response = await postsAPI.getAll();
            console.log(response, " data");
            setPosts([...response.data]);
        } catch (err) {
            console.log(err.message, " this is the error");
        }
    }

    useEffect(() => {


        getPosts();
        console.log("this is the useEffect firing")
    }, [])

    async function handleDeletePost(id) {
        try {
            const response = await postsAPI.deletePost(id);
            console.log(response, 'deleted post')
            getPosts()
        } catch (err) {
            console.log(err)
        }
    }

    if (error) {
        return (
            <>
                <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
                <ErrorMessage error={error} />
            </>
        )
    }

    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column>
                    <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <AddPost handleAddPost={handleAddPost} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <PostGallery handleDeletePost={handleDeletePost} posts={posts} loggedUser={loggedUser} />
                </Grid.Column>
            </Grid.Row>







        </Grid>
    )


}