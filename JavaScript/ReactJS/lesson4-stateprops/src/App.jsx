import React, { Component } from "react";
import CardList from "./components/card/CardList";
import Counter from "./components/counter/Counter";
import Nav from "./components/Nav";


class App extends Component{
    render(){
        return(
            
          <>
            <Nav />
            <div className="container">
            {/* <CardList /> */}
            <Counter />
            </div>
          </>
        )
    }
}

export default App