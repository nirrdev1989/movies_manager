import React from 'react'
import styled from 'styled-components'
import { deleteIcon, editIcon } from '../../icons'
import { CardWrapper, Card, CardBody, CardFooter, CardHeader } from '../../styles/Card'
import { SubsListContainer } from '../../styles/Lists'
import Button from '../components-utils/Button'
import NavigateButton from '../components-utils/NavigateButton'



export default function UserItem({ user, onDelete, index }) {
   return (
      <CardWrapper>
         <Card width="300px" height="340px" >
            <CardHeader>
               <h6 className="card-title">{user.firstName + ' ' + user.lastName}</h6>
               <hr />
            </CardHeader>
            <CardBody height="70%">
               <PropSpan> <strong>User Name:</strong>  {user.userName}</PropSpan>
               <PropSpan><strong>Session Time Out:</strong> {user.sessionTimeOut}</PropSpan>
               <PropSpan><strong>Created Data:</strong> {user.createdDate}</PropSpan>
               <PropSpan><strong>Premmisions:</strong></PropSpan>
               <SubsListContainer maxHeight={'130px'}>
                  <ul>
                     {user.premissions.map((premission) => {
                        return <li key={premission} >{premission}</li>
                     })}
                  </ul>
               </SubsListContainer>
            </CardBody>
            <CardFooter>
               <NavigateButton content={editIcon} url={`/main/users/edit_user/${index}`} />
               <Button type="button" handler={() => onDelete(user._id)} content={deleteIcon} />
            </CardFooter>
         </Card>
      </CardWrapper>
   )
}


const PropSpan = styled.span`
    font-size: 14px;
`