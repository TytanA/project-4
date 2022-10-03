import React, { useState } from "react";
import { Button, Form, Segment } from 'semantic-ui-react'

export default function AddPost(props) {
    const [newPost, setNewPost] = useState({
        title: '',
        ingredients: '',
        directions: ''
    })

    const [selectedFile, setSelectedFile] = useState('')

    function handleFileInput(e) {
        setSelectedFile(e.target.files[0])
    }

    function handleChange(e) {
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', selectedFile)
        for (let key in newPost) {
            formData.append(key, newPost[key])
        }
        props.handleAddPost(formData);
        setNewPost({
            title: '',
            ingredients: '',
            directions: ''
        })
        setSelectedFile('')
    }

    return (
        <Segment >
            Add a Post
            <Form onSubmit={handleSubmit}>
                <Form.Input
                    className="form-control"
                    name="title"
                    value={newPost.title}
                    placeholder="What do you call this Disaster?"
                    onChange={handleChange}
                    required
                />
                <Form.Input
                    className="form-control"
                    name="ingredients"
                    value={newPost.ingredients}
                    placeholder="What are the ingredients and amounts?"
                    onChange={handleChange}
                    required
                />
                <Form.Input
                    className="form-control"
                    name="directions"
                    value={newPost.directions}
                    placeholder="How do you make this disaster?"
                    onChange={handleChange}
                    required
                />
                <Form.Field>
                    <Form.Input
                        type="file"
                        name="photo"
                        placeholder="upload image"
                        onChange={handleFileInput}
                    />
                </Form.Field>
                <Button type="submit" className="btn">
                    Add Disaster
                </Button>
            </Form>
        </Segment>
    );


}