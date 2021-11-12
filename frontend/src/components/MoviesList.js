import React from 'react'
import { Link } from 'react-router-dom'
import { movies, users } from '../data/data'
import Button from './components-utils/Button'
// import Card from './components-utils/Card'
import NavigateButton from './components-utils/NavigateButton'
import styled from 'styled-components'
import { CardWrapper, CardBody, Card, CardFooter, CardHeader } from '../styles/Card'
import { deleteIcon, editIcon } from '../icons'

export default function MoviesList() {
   function onDelete() {

   }
   return (
      <Container>
         {movies.map((movie) => {
            return (
               <CardWrapper key={movie.name}>
                  <Card width="300px" height="250px" >
                     <CardHeader>
                        <h5 className="card-title">{movie.name}</h5>
                        <h6 className="card-subtitle  text-muted">Genres: {movie.genres} / {movie.premired.split('/')[2]}</h6>
                     </CardHeader>
                     <CardBody>
                        <div style={{ display: 'flex' }}>
                           <div style={{ width: '50%' }}>
                              <img src={movie.imageUrl} width="60%" />
                           </div>
                           <div>
                              <h5>Subs</h5>
                              <ol>
                                 <li>{users[0].firstName + ' ' + users[0].lastName}</li>
                              </ol>
                           </div>
                        </div>
                     </CardBody>
                     <CardFooter>
                        <NavigateButton content={editIcon} url={`/main/movies/edit_movie/${movie.id}`} />
                        <Button type="button" handler={() => onDelete(movie.id)} content={deleteIcon} />
                     </CardFooter>
                  </Card>
               </CardWrapper>
            )
         })}
      </Container>
   )
}

export const Container = styled.div`
   display: grid;
   width: 100%;
   /* flex-direction: row; */
   /* justify-content: space-between; */
   grid-template-columns: 1fr 1fr 1fr;
   grid-gap:1rem;
   margin-top: 1rem;
   margin-bottom: 1rem;
`