import React from 'react';
import axios from 'axios'
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardImg,
   CardSubtitle,
   CardTitle,
   Button,
} from 'reactstrap'


class App extends React.Component {

constructor() {
  super();
 this.state = {
  user: [],
  followers: []
}
}

 componentDidMount(){
axios
.get ('https://api.github.com/users/orecodev')
.then((response) => {
  this.setState({user: response.data})
})
.catch(err => {
  console.log(err)
})

axios
.get(`https://api.github.com/users/orecodev/followers`)
.then((response) => {
  this.setState({followers: response.data})
})
}


render() {

  return (
   <div>
   <h1>Who I Am</h1>
   <Card>
<CardBody>
</CardBody>
<CardImg src={this.state.user.avatar_url} />
<CardText>{this.state.user.bio}</CardText>
   </Card>

{this.state.followers.map((user) => {
  return (
    <Card>
     <CardTitle>{user.name}</CardTitle> 
      <CardSubtitle>{user.login}</CardSubtitle>
      <CardImg width="200" src={user.avatar_url} />
      <CardText>{user.bio}</CardText>
      <Button>See</Button>
    </Card>
  )
})}
   </div>
  )
}
}

export default App
