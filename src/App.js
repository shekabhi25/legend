import React from 'react'
import Age1 from './Age1'

export default function App(props) {
  return (

    <>
      <div>
        <h1>
          react js s
        </h1>

        <Age1></Age1>
        <hr />
        

        <h1> {props.name}  &&  {props.lname}</h1>




      </div>
    </>
  )
}
