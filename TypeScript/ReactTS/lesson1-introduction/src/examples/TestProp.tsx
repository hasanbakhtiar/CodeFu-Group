import React from 'react'

interface propType{
    title:string;
    price:number
}


const TestProp:React.FC<propType> = (props) => {
  return (
    <div>
        <ul>
            <li>{props.title}</li>
            <li>{props.price+5}</li>
        </ul>
    </div>
  )
}

export default TestProp