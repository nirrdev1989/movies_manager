import { useState } from 'react'
import { deleteIcon, editIcon } from '../../icons'
import { CardWrapper, Card, CardBody, CardFooter, CardHeader } from '../../styles/Card'
import Button from '../components-utils/Button'
import NavigateButton from '../components-utils/NavigateButton'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { addSubAction } from '../../redux/subs/actions'
import Modal from '../Modal/Modal'
import AddSubForm from '../Forms/AddSubForm'
import { SubsListContainer } from '../../styles/Lists'
import MyLink from '../components-utils/MyLink'

function MemberItem({ member, onDelete, index, currentUser }) {
   const [showModal, setShowModal] = useState(false)

   if (!member) return null

   return (
      <CardWrapper>
         <Modal show={showModal} closeModal={() => setShowModal(false)} >
            <AddSubForm member={member} />
         </Modal>
         <Card width="300px" height="300px">
            <CardHeader>
               <h6 className="card-title">{member.memberName}</h6>
               <hr />
               <h6 style={{ fontSize: '13px' }} className="card-subtitle mb-2 text-muted">Email: {member.email}</h6>
               <h6 style={{ fontSize: '13px' }} className="card-subtitle  text-muted">City: {member.city}</h6>
            </CardHeader>
            <CardBody height="55%">
               <AddSubContainer>
                  <AddSubHeader>
                     <span>Movies watched</span>
                     {currentUser.premissions.includes('add subs') && <Button handler={() => setShowModal(true)} type="button" bg="whitesmoke" color="green" content="Subscribe" />}
                  </AddSubHeader>
               </AddSubContainer>

               {member?.memberMovies.length > 0 ?
                  <SubsListContainer maxHeight={'100px'}>
                     <ul>
                        {member.memberMovies.map((movie, i) => {
                           // &nbsp; {member.subs[0].movies[i].dateWatched}
                           return <li> <MyLink key={movie._id + 1} content={movie.movieName} to={`/main/movies/${movie._id}`} click={currentUser.premissions.includes('view movies')} /></li>
                        })}
                     </ul>
                  </SubsListContainer> : <p style={{ fontSize: '13px' }}>No movies yet</p>}
            </CardBody>
            <CardFooter>
               {currentUser.premissions.includes('edit members') && <NavigateButton content={editIcon} url={`/main/subscriptions/edit_member/${index}`} />}
               {currentUser.premissions.includes('delete members') && <Button type="button" handler={() => onDelete(member._id)} content={deleteIcon} />}
            </CardFooter>
         </Card>
      </CardWrapper>
   )
}

function mapDispatchToProps(dispatch) {
   return {
      addSub: (data) => dispatch(addSubAction(data)),
   }
}

export default connect(null, mapDispatchToProps)(MemberItem)

export const AddSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-top: 1rem; */
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