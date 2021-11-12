import React from 'react'
import { Link } from 'react-router-dom'
import { users } from '../data/data'
import { FormControlS } from '../styles/FormControl'
import Button from './components-utils/Button'
// import Card from './components-utils/Card'
import NavigateButton from './components-utils/NavigateButton'
import styled from 'styled-components'
import { CardWrapper, Card, CardBody, CardFooter, CardHeader } from '../styles/Card'
import { editIcon, deleteIcon } from "../icons/index";



export default function UsersList() {
   console.log('USERS LIST COMPONENT')

   const [usersArray, setUserArray] = React.useState(users)

   function onDelete(id) {
      const newUsers = usersArray.filter((user) => user.id !== id)
      setUserArray(newUsers)
   }

   return (
      <Container>
         {usersArray.map((user) => {
            return (
               <CardWrapper>
                  <Card width="300px" height="250px" >
                     <CardHeader>
                        <h5 className="card-title">Name: {user.firstName + ' ' + user.lastName}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">User Name: {user.userName}</h6>
                     </CardHeader>
                     <CardBody>
                        <span>Session Time Out: {user.sessionTimeOut}</span>
                        <span>Created Data: {user.createdDate}</span>
                        <span>Premmisions: {JSON.stringify(user.premissions)}</span>
                     </CardBody>
                     <CardFooter>
                        <NavigateButton content={editIcon} url={`/main/users/edit_user/${user.id}`} />
                        <Button type="button" handler={() => onDelete(user.id)} content={deleteIcon} />
                     </CardFooter>
                  </Card>
               </CardWrapper>
            )
         })}
      </Container>
   )
}



export const Container = styled.div`
   display: grid;
   width: 100%;
   /* flex-direction: row; */
   /* justify-content: space-between; */
   grid-template-columns: 1fr 1fr 1fr;
   grid-gap:1rem;
   margin-top: 1rem;
   margin-bottom: 1rem;
`

// export const


