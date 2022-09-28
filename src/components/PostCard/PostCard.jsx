import React from 'react'
import { Card, Image } from 'semantic-ui-react'


export default function PostCard({post, title, photoUrl}) {
  
  return(
  <Card key={post._id}>
    <Image src={photoUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
      </Card.Meta>
      <Card.Description>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
  </Card>
  )
}