import { useState } from 'react'
import { deleteIcon, editIcon } from '../../icons'
import { CardWrapper, Card, CardBody, CardFooter, CardHeader } from '../../styles/Card'
import Button from '../components-utils/Button'
import NavigateButton from '../components-utils/NavigateButton'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { addSubAction } from '../../redux/subs/actions'
import Modal from '../Modal/Modal'
import { Link } from 'react-router-dom'
import AddSubForm from '../Forms/AddSubForm'

function MemberItem({ member, onDelete, index }) {

   const [showModal, setShowModal] = useState(false)
   console.log(index)
   return (
      <CardWrapper>
         <Modal show={showModal} closeModal={() => setShowModal(false)} >
            <AddSubForm member={member} />
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

               {member.memberMovies.length > 0 &&
                  <SubsListContainer>
                     <ul>
                        {member.memberMovies.map((movie) => {
                           return <li><Link to={`/main/movies/${movie._id}`} key={movie._id + 1}> {movie.movieName} </Link></li>
                        })}
                     </ul>
                  </SubsListContainer>}
            </CardBody>
            <CardFooter>
               <NavigateButton content={editIcon} url={`/main/subscriptions/edit_member/${index}`} />
               <Button type="button" handler={() => onDelete(member._id)} content={deleteIcon} />
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

export const SubsListContainer = styled.div` 
    margin-top: 0.5rem;
    width: 90%;
    max-height: 100px;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      width: 7px;
   }
   ::-webkit-scrollbar-track {
      background: #f1f1f1;
   }
   ::-webkit-scrollbar-thumb {
      background: #888;
   }
   ::-webkit-scrollbar-thumb:hover {
      background: #555;
   }
  `