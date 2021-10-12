import React from 'react'
import { Link } from 'react-router-dom'
import { users } from '../data/data'
import Card from './components-utils/Card'



export default function UsersList() {
   return (
      <div>

         {users.map((user) => {
            return (
               <Card key={user.userName}>
                  <h5 className="card-title">Name: {user.firstName + ' ' + user.lastName}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">User Name: {user.userName}</h6>
                  <p className="card-text" style={{ display: 'flex', flexDirection: 'column' }}>
                     <span>Session Time Out: {user.sessionTimeOut}</span>
                     <span>Created Data: {user.createdDate}</span>
                     <span>Premmisions: {JSON.stringify(user.premissions)}</span>
                  </p>
                  <Link to={`/main/users/edit_user/${user.id}`} >Edit</Link>
                  {/* <a href="#" className="card-link">Another link</a> */}
               </Card>
            )
         })}

      </div>
   )
}
