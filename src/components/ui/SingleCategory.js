// TO BE DELETED
import React from 'react'
const SingleCategory = (props) => {
  return (
    <div className='single-category'>
        <img src={props.img}></img>
        <p>{props.title}</p>
    </div>
  )
}

export default SingleCategory