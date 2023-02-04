import { Component } from "react";

import List from "./components/List";

  
class App extends Component{
    render(){
      return(
       <>
        <h1>Hello React</h1>
        <List />
        <List />
        <List />
        <List />
       </>
      )
    }
  }

export default App