import React from 'react'
import { deleteIcon, editIcon } from '../../icons'
import { CardWrapper, Card, CardBody, CardFooter, CardHeader } from '../../styles/Card'
import { SubsListContainer } from '../../styles/Lists'
import Button from '../components-utils/Button'
import MyLink from '../components-utils/MyLink'
import NavigateButton from '../components-utils/NavigateButton'
// import styled from 'styled-components'

export default function MovieItem({ movie, onDelete, index, currentUser }) {

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
                  <div>
                     <span>Subscribers</span>
                     {movie.movieSubs.length > 0 ?
                        <SubsListContainer maxHeight={'100px'}>
                           <ul>
                              {movie.movieSubs.map((sub) => {
                                 return <li><MyLink key={sub._id + 1} content={sub.memberName} to={`/main/subscriptions/${sub._id}`} click={currentUser.premissions.includes('view members')} /> </li>
                              })}
                           </ul>
                        </SubsListContainer> : <p>No subscribers yet</p>}
                  </div>
               </div>
               <h6 className="card-subtitle mt-2  text-muted">Genres: {movie.genres.map((gen, i) => i === movie.genres.length - 1 ? gen : gen + ', ')}</h6>
            </CardBody>
            <CardFooter>
               {currentUser.premissions.includes('edit movies') && <NavigateButton content={editIcon} url={`/main/movies/edit_movie/${index}`} />}
               {currentUser.premissions.includes('delete movies') && <Button type="button" handler={() => onDelete(movie._id)} content={deleteIcon} />}
            </CardFooter>
         </Card>
      </CardWrapper>
   )
}
