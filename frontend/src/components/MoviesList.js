import React from 'react'
import { Link } from 'react-router-dom'
import { movies, users } from '../data/data'
import Card from './components-utils/Card'


export default function MoviesList() {
   return (
      <div>
         {movies.map((movie) => {
            return (
               <Card key={movie.name}>
                  <h5 className="card-title">{movie.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Genres: {movie.genres} / {movie.premired.split('/')[2]}</h6>
                  <div style={{ display: 'flex' }}>
                     <div style={{ width: '50%' }}>
                        <img src={movie.imageUrl} width="60%" />
                     </div>
                     <div>
                        <h5>Subs</h5>
                        <ul>
                           <li>{users[0].firstName + ' ' + users[0].lastName}</li>
                        </ul>
                     </div>
                  </div>
                  <Link to={`/main/movies/edit_movie/${movie.id}`} >Edit</Link>
               </Card>
            )
         })}
      </div>
   )
}
