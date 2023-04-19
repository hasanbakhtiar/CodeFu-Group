import React, { useState } from 'react'
import TestProp from './examples/TestProp'
import TestState from './examples/TestState'
import TestPropWithState from './examples/TestPropWithState'

const App:React.FC = () => {
  const [mydata,setMydata] = useState<string>('test')
  
  
 const screenFunc=(a:string):void=>{
    setMydata(a);
  }
  
  return (
    <>
     {/* <TestProp title='Table' price={50}/>  */}
    {/* <TestState /> */}
    {mydata}
    <TestPropWithState  title="Table" comingData={screenFunc}/>
    </>
  )
}

export default App