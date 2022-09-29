import React from 'react'
import DeleteButton from '../../components/DeleteButton/DeleteButton'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'



export default function PostCard({ link, title, photoUrl, loggedUser, username, id, handleDeletePost }) {

  console.log(username)
  console.log(loggedUser.username)

  return(
  <Card key={id}>
    <Image src={photoUrl} wrapped ui={false} />
    <Card.Content>
       <Link to={`/posts/${link}`} > 
      <Card.Header>{title}</Card.Header>
      </Link>
      <Card.Meta>
      </Card.Meta>
      <Card.Description>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    {loggedUser?.username === username
                ? <DeleteButton id={id} handleDeletePost={handleDeletePost}/>
                : ''
            }
    </Card.Content>
  </Card>
  )
}