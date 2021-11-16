import React from 'react'
import { deleteIcon, editIcon } from '../../icons'
import { CardWrapper, Card, CardBody, CardFooter, CardHeader } from '../../styles/Card'
import Button from '../components-utils/Button'
import NavigateButton from '../components-utils/NavigateButton'


export default function UserItem({ user, onDelete }) {
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
               <NavigateButton content={editIcon} url={`/main/users/edit_user/${user._id}`} />
               <Button type="button" handler={() => onDelete(user._id)} content={deleteIcon} />
            </CardFooter>
         </Card>
      </CardWrapper>
   )
}
