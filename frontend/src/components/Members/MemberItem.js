import React from 'react'
import { deleteIcon, editIcon } from '../../icons'
import { CardWrapper, Card, CardBody, CardFooter, CardHeader } from '../../styles/Card'
import Button from '../components-utils/Button'
import NavigateButton from '../components-utils/NavigateButton'
import styled from 'styled-components'
import useForm from '../../hooks/useForm'
import { FormControlS } from '../../styles/FormControl'
import { connect } from 'react-redux'
import { addSubAction } from '../../redux/subs/actions'
import { toggleModalAction } from '../../redux/modal/actions'
import Modal from '../Modal/Modal'

function MemberItem({ member, onDelete, movies, addSub, toggleModal }) {

   const [showModal, setShowModal] = React.useState(false)

   const { state, onChange, onSubmit } = useForm({
      movieId: '',
      dateWatched: ''
   }, callback)

   function callback(values) {
      values.memberId = member._id
      console.log(values)
      addSub(values)
      setShowModal(false)
   }

   return (
      <CardWrapper>
         <Modal show={showModal} closeModal={() => setShowModal(false)} >
            <form onSubmit={onSubmit} >
               <h3 style={{ textAlign: 'center' }} >Subscribe Movie</h3>
               <select style={{ height: '30px', marginBottom: '0.5rem' }} type="text" name="movieId" onChange={onChange} value={state.nameMovie} >
                  {movies.length > 0 && movies.map((movie) => {
                     return <option key={movie._id} value={movie._id} >{movie.movieName}</option>
                  })}
               </select>
               <FormControlS className="form_control" style={{ height: 'auto' }}>
                  <input type="date" name="dateWatched" onChange={onChange} value={state.dateWatched} />
               </FormControlS>
               <Button type="submit" bg="rgb(34, 238, 170)" content="Add" />
            </form>
         </Modal>
         <Card width="300px" height="300px">
            <CardHeader>
               <h5 className="card-title">Name: {member.memberName}</h5>
               <h6 className="card-subtitle mb-2 text-muted">Email: {member.email}</h6>
               <h6 className="card-subtitle mb-2 text-muted">City: {member.city}</h6>
            </CardHeader>
            <CardBody>
               <AddSubContainer>
                  <AddSubHeader>
                     <span>Movies watched</span>
                     <Button handler={() => setShowModal(true)} type="button" bg="whitesmoke" color="green" content="Subscribe" />
                  </AddSubHeader>
               </AddSubContainer>
            </CardBody>
            <CardFooter>
               <NavigateButton content={editIcon} url={`/main/subscriptions/edit_member/${member._id}`} />
               <Button type="button" handler={() => onDelete(member._id)} content={deleteIcon} />
            </CardFooter>
         </Card>
      </CardWrapper>
   )
}

function mapDispatchToProps(dispatch) {
   return {
      addSub: (data) => dispatch(addSubAction(data)),
      toggleModal: (status) => dispatch(toggleModalAction(status))
   }
}

export default connect(null, mapDispatchToProps)(MemberItem)

export const AddSubContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const AddSubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  height: 35px;
  >button {
     width: 50%;
     font-size: 13px;
     /* height: 25px; */
  }
  `