import React, { useRef } from 'react'
import MyInput from './MyInput';






const AppUseImperativeHandle = () => {
    const myRef = useRef();
    const handleClick = ()=>{
        myRef.current.hi();
    }
  return (
    <div>
            <MyInput ref={myRef}/>
            <button onClick={handleClick}>test</button>
    </div>
  )
}

export default AppUseImperativeHandle