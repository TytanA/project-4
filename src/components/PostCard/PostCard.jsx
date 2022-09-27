import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


export default function PostCard({ posts }) {
  
  return(
  <Card key={posts._id}>
    <Image src={posts.photoURL} wrapped ui={false} />
    <Card.Content>
      <Card.Header></Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
  </Card>
  )
}