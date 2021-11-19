import { Link } from 'react-router-dom'

export default function MyLink({ click, to, content }) {
   return (
      <>
         {click ? <Link to={to}> {content} </Link> : <span>{content}</span>}
      </>
   )
}
