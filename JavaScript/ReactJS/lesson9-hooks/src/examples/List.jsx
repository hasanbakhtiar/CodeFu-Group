import React from 'react'

const List = ({title,price,desc}) => {
  return (
   <>
   
   {/* <ol>
        <li>{props.title}</li>
        <li>{props.price}</li>
        <li>{props.desc}</li>
    </ol> */}

    <ol>
        <li>{title}</li>
        <li>{price}</li>
        <li>{desc}</li>
    </ol>
   
   
   </>
  )
}

export default List