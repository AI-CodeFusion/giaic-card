


import React from 'react'

function Student(props:{name:string, age:number, slot:string}) {
  return (
    <div>
        <p>Name: {props.name} </p>
        <p>Age: {props.age} </p>
        <p>Slot: {props.slot}</p>
    </div>
  )
}

export default Student