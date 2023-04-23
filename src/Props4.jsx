import React from 'react'
import pt from 'prop-types'

export default function Props4(props) {
  return (
    <div>
      

         <h1> company : {props.company}  and salary {props.salary}  and {props.msg}</h1>
    </div>
  )
}

Props4.protType={
    salary: pt.string,
    company: pt.string,
    msg: pt.string.isRequired

};

