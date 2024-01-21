import React from 'react'

export default function Greet(props) {
  return (
    <div className='container card p-3 mt-2 register-container'>
      <h3>{props.name}</h3>
      <h3>Thank You</h3>  
      <h3>{props.email}</h3>
    </div>
  )
}
