import React, {  useLayoutEffect, useState } from 'react'

const AppUseLayoutEffect = () => {

    const [data,setData] = useState('hello');
    
    useLayoutEffect(()=>{
        alert("changed");
        setData('hi')
    },[])
    
  return (
    <div>
        {data}
    </div>
  )
}

export default AppUseLayoutEffect