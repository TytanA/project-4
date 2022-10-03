import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import PageHeader from '../../components/Header/Header';

import * as postApis from '../../utils/postApi'



export default function RecipePage({ loggedUser, handleLogout }) {
    const [post, setPost] = useState({})

    const { id } = useParams();



    useEffect(() => {

        async function getPost(id) {
            try {
                const response = await postApis.getPost(id)
                setPost(response)
            } catch (err) {

            }

        }

        getPost(id)
    }, [id])

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <PageHeader handleLogout={handleLogout} loggedUser={loggedUser} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    {post.title}
                </Grid.Column>
            </Grid.Row>


        </Grid>
    )
}
