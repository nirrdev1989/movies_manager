import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { deleteMemberAction, getMembersAction } from '../../redux/members/actions'
import MemberItem from './MemberItem'


function MembersList({ getMembers, members, deleteMember, currentUser }) {
   const { id } = useParams()

   function onDelete(id) {
      deleteMember(id)
   }

   React.useEffect(() => {
      if (!members) {
         getMembers()
      }
   }, [])

   function renderMemberItem(member, i) {
      return <MemberItem key={member._id} onDelete={onDelete} member={member} index={i} currentUser={currentUser} />
   }

   return (
      <Container>
         {members && members.map((member, i) => {
            if (id) {
               if (id === member._id) {
                  return renderMemberItem(member, i)
               }
               return null
            }
            return (
               renderMemberItem(member, i)
            )
         })}
      </Container>
   )
}


function mapStateToProps(state) {
   return {
      loading: state.members.loading,
      members: state.members.members,
      // movies: state.movies.movies,
   }
}

function mapDispatchToProps(dispatch) {
   return {
      getMembers: () => dispatch(getMembersAction()),
      deleteMember: (id) => dispatch(deleteMemberAction(id)),
      // getMovies: () => dispatch(getMoviesAction()),
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(MembersList)

export const Container = styled.div`
   display: grid;
   width: 100%;
   grid-template-columns: 1fr 1fr 1fr;
   grid-gap:1rem;
   margin-top: 1rem;
   padding-bottom: 3rem;
`


