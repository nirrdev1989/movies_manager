import React from 'react'
import { deleteIcon, editIcon } from '../../icons'
import { CardWrapper, Card, CardBody, CardFooter, CardHeader } from '../../styles/Card'
import Button from '../components-utils/Button'
import NavigateButton from '../components-utils/NavigateButton'

export default function MovieItem({ movie, onDelete }) {
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
                     <img src={movie.imageUrl} width="60%" />
                  </div>
                  <div>
                     <h5>Subs</h5>
                     <ol>
                        {/* <li>{users[0].firstName + ' ' + users[0].lastName}</li> */}
                     </ol>
                  </div>
               </div>
               <h6 className="card-subtitle mt-2  text-muted">Genres: {JSON.stringify(movie.genres)} </h6>
            </CardBody>
            <CardFooter>
               <NavigateButton content={editIcon} url={`/main/movies/edit_movie/${movie._id}`} />
               <Button type="button" handler={() => onDelete(movie._id)} content={deleteIcon} />
            </CardFooter>
         </Card>
      </CardWrapper>
   )
}
