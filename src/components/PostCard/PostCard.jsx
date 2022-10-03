import React from 'react'
import DeleteButton from '../../components/DeleteButton/DeleteButton'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'



export default function PostCard({ title, photoUrl, loggedUser, username, id, handleDeletePost, avatarImg }) {



  return (
    <Card key={id}>

      <Image src={photoUrl} wrapped ui={false} />

      <Card.Content>

        <Card.Header>
          <Link to={`/${username}`} >
            <Image
              size='large'
              avatar
              src={avatarImg} />
          </Link>

          {title}
        </Card.Header>

        <Card.Meta>
        </Card.Meta>

      </Card.Content>
      <Card.Content extra>
        {loggedUser?.username === username
          ? <DeleteButton id={id} handleDeletePost={handleDeletePost} />
          : ''
        }
      </Card.Content>
    </Card>
  )
}