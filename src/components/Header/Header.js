import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Icon } from 'semantic-ui-react'


export default function PageHeader({ loggedUser, handleLogout, user }) {

    if (user) {
        return (
            <Header as='h2'>
                <Link to='/'>
                    <Icon name='home'></Icon>
                </Link>
                <Link to='' onClick={handleLogout}>
                    Logout
                </Link>
            </Header>
        )
    }
    else{
        return (
            <Header as='h2'>
                <Link to='/'>
                    <Icon name='home'></Icon>
                </Link>
                <Link to='/signup'>
                    Sign Up
                </Link>
                <Link to='/login'>
                    Login
                </Link>
            </Header>
        )
    }
}