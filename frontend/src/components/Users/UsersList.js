import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { deleteUserAction, getUsersAction } from '../../redux/users/actions'
import UserItem from './UserItem'
// import Loader from "./Loader";


function UsersList({ loading, getUsers, users, deleteUser }) {

   function onDelete(id) {
      deleteUser(id)
   }

   React.useEffect(() => {
      if (!users) {
         getUsers()
      }
   }, [])

   return (
      <Container>
         {users && users.map((user, i) => {
            return (
               <UserItem key={user._id} onDelete={onDelete} user={user} index={i} />
            )
         })}
      </Container>
   )
}

function mapStateToProps(state) {
   return {
      loading: state.users.loading,
      users: state.users.users
   }
}

function mapDispatchToProps(dispatch) {
   return {
      getUsers: () => dispatch(getUsersAction()),
      deleteUser: (id) => dispatch(deleteUserAction(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)

export const Container = styled.div`
   display: grid;
   width: 100%;
   grid-template-columns: 1fr 1fr 1fr;
   grid-gap:1rem;
   margin-top: 1rem;
   padding-bottom: 3rem;
`