import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import userService from "../../utils/userService";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { PinpointEmail } from "aws-sdk";

import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

export default function SignUpPage(props) {
  const [error, setError] = useState({
    message: '',
    passwordError: false
  });
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConf: ''
  })
  const [selectedFile, setSelectedFile] = useState('');



  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (state.password !== state.passwordConf) return setError({ message: 'Passwords Must Match!', passwordError: true });
    const formData = new FormData();
    formData.append('photo', selectedFile);
    for (let key in state) {
      formData.append(key, state[key])
    }
    try {
      await userService.signup(formData);
      props.handleSignUporLogin();
      Navigate('/');
    } catch (err) {
      console.log(err)
      setError({ message: err.message })
    }
  }

  function handleFileInput(e) {
    console.log(e.target.files, '<-this is the uploading file')
    setSelectedFile(e.target.files[0]);
  }


  return (
    <>
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Signup for your account
        </Header>
        <Form size='large' onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              name='username'
              placeholder='username'
              value={state.username}
              onChange={handleChange}
              required />
            <Form.Input
              name='email'
              placeholder='email'
              value={state.email}
              onChange={handleChange}
              required />
            <Form.Input
              icon='lock'
              iconPosition='left'
              name='password'
              placeholder='password'
              value={state.password}
              onChange={handleChange}
              type='password'
              required />
            <Form.Input
              icon='lock'
              iconPosition='left'
              name='passwordConf'
              placeholder='Confirm Password'
              value={state.passwordConf}
              onChange={handleChange}
              type='password'
              required />
            <Form.Field>
              <label>Upload a Profile Picture</label>
              <Form.Input
                type='file'
                name='photo'
                placeholder='upload image'
                onChange={handleFileInput}
              />
            </Form.Field>
            <Button type='submit' color='teal' fluid size='large'>
              Signup
            </Button>
          </Segment>
        </Form>
        <Message>
          Already a member? <Link to='/login'>Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
    </>
  );
}
