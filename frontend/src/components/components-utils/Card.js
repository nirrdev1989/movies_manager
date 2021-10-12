import React from 'react'

export default function Card({ children }) {
   return (
      <div className="card mb-2" style={{ width: '22rem' }}>
         <div className="card-body">
            {children}
         </div>
      </div>
   )
}
