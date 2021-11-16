import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { deleteMemberAction, getMembersAction } from '../../redux/members/actions'
import { getMoviesAction } from '../../redux/movies/actions'
import MemberItem from './MemberItem'


function MembersList({ loading, movies, getMembers, members, deleteMember, getMovies }) {

   function onDelete(id) {
      deleteMember(id)
   }

   React.useEffect(() => {
      if (!members.length) {
         getMembers()
      }
      if (!movies.length) {
         getMovies()
      }

      console.log(movies)
   }, [movies])

   return (
      <Container>
         {members && members.map((member) => {
            return (
               <MemberItem key={member._id} member={member} onDelete={onDelete} movies={movies} />
            )
         })}
      </Container>
   )
}


function mapStateToProps(state) {
   return {
      loading: state.members.loading,
      members: state.members.members,
      movies: state.movies.movies,
   }
}

function mapDispatchToProps(dispatch) {
   return {
      getMembers: () => dispatch(getMembersAction()),
      deleteMember: (id) => dispatch(deleteMemberAction(id)),
      getMovies: () => dispatch(getMoviesAction()),
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


