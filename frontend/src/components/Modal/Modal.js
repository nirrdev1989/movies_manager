import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { toggleModalAction } from '../../redux/modal/actions'
import Button from '../components-utils/Button'
import ReactDOM from 'react-dom';

function Modal({ children, closeModal, show }) {
   if (!show) return null
   return (
      ReactDOM.createPortal(
         <ModalContainer>
            <ModalBox>
               {/* <p> {warningIcon} </p> */}
               {/* <p><strong>{'message'}</strong></p> */}
               {children}
               {/* <Button blue onClick={() => toggleModal(false)}>Close</Button> */}
               <Button color="red" content="Close" handler={closeModal} />
            </ModalBox>
         </ModalContainer>
         , document.getElementById('modal'))
   )
}

// function mapStateToProps(state) {
//    return {
//       show: state.modal.status
//    }
// }

// function mapDispatchToProps(dispatch) {
//    return {
//       toggleModal: (status) => dispatch(toggleModalAction(status))
//    }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Modal)
export default Modal


const ModalContainer = styled.div`
   width: 100%;
   height: 100%;
   position: fixed;
   z-index: 100;
   background-color: rgba(0, 0, 0, 0.5);
   overflow: hidden;
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: 60vh;
   `

const ModalBox = styled.div`
    padding: 1rem 2rem;
    width: 400px;
    min-height: 200px;

    /* padding-bottom: 2rem; */
    background-color: white;
    border-radius: 2px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 430px) {
      max-width: 300px;
    }
`