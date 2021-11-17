import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { deleteIcon, editIcon } from '../../icons'
import { CardWrapper, Card, CardBody, CardFooter, CardHeader } from '../../styles/Card'
import Button from '../components-utils/Button'
import NavigateButton from '../components-utils/NavigateButton'

export default function MovieItem({ movie, onDelete, index }) {
   return (
      <CardWrapper key={movie.movieName}>
         <Card width="300px" height="270px" >
            <CardHeader>
               <h5 className="card-title">{movie.movieName}</h5>
               <h6>  {movie.premiered}</h6>
            </CardHeader>
            <CardBody>
               <div style={{ display: 'flex' }}>
                  <div style={{ width: '50%' }}>
                     <img src={movie.imageUrl} width="100" height="120" />
                  </div>
                  {movie.movieSubs.length > 0 &&
                     <SubsListContainer>
                        <ul>
                           {movie.movieSubs.map((sub) => {
                              return <li><Link to={`/main/subscriptions/${sub._id}`} key={sub._id + 1}> {sub.memberName} </Link></li>
                           })}
                        </ul>
                     </SubsListContainer>}
               </div>
               <h6 className="card-subtitle mt-2  text-muted">Genres: {JSON.stringify(movie.genres)} </h6>
            </CardBody>
            <CardFooter>
               <NavigateButton content={editIcon} url={`/main/movies/edit_movie/${index}`} />
               <Button type="button" handler={() => onDelete(movie._id)} content={deleteIcon} />
            </CardFooter>
         </Card>
      </CardWrapper>
   )
}


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