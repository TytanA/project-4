import React, { useState, useEffect, useCallback } from 'react';
import { Grid } from 'semantic-ui-react'
import PostGallery from '../../components/PostGallery/PostGallery'
import PageHeader from '../../components/Header/Header';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Profile from '../../components/Profile/Profile'

import userService from '../../utils/userService'
import * as postsAPI from '../../utils/postApi';
import { useParams } from 'react-router-dom'

export default function ProfilePage({ loggedUser, handleLogout }) {
    const [posts, setPosts] = useState([]);
    const [profileUser, setProfileUser] = useState({});
    const [error, setError] = useState('')

    const { username } = useParams();


    const getProfile = useCallback(async () => {
        try {
            const response = await userService.getProfile(username)

            setProfileUser(response.data.user);
            setPosts(response.data.posts);

        } catch (err) {
            setError(err)
        }
    }, [username]);

    useEffect(() => {

        getProfile();
    }, [username, getProfile])


    async function handleDeletePost(id) {
        try {
            const response = await postsAPI.deletePost(id);

            getProfile();
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
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Profile user={profileUser} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <Grid.Column style={{ maxWidth: 750 }}>
                    <PostGallery
                        posts={posts}
                        loggedUser={loggedUser}
                        handleDeletePost={handleDeletePost}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );






}
