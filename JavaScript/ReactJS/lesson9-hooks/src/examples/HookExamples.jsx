import React from 'react'
import List from './List';
//  class App extends Component {
//   render() {
//     return (
//       <div> class component App</div>
//     )
//   }
// }

// export  function App(){
//     return(
//         <div>function component</div>
//     )
// }


// export  const App =()=>{
//     return(
//         <div>arrow function component</div>
//     )
// }
const HookExamples =()=>{
    const data = 'new value';

    return(
        <div>
            <List title={data} price={10} desc="desc for pen"/>
            <List title='laptop' price={20} desc="desc for laptop"/>
            <List title = 'chair' price={30} desc="desc for chair"/>
        </div>
    )
}

export default HookExamples