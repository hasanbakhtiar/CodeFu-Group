import {useState} from 'react'
import { Button, Container } from 'react-bootstrap'

const Counter = () => {

    const [count,setCount] = useState(10);
    
   const increment=()=>{
    setCount(count+1)
    }
  return (
    <Container className='mt-5'>
        <Button variant='danger' onClick={()=>{
            setCount(count-1)
        }}>-1</Button>
        <span className='mx-3'>{count}</span>
        <Button variant='success'  onClick={increment}>+1</Button>
    </Container>
  )
}

export default Counter