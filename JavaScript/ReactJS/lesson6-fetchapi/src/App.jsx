import axios from 'axios'
import React, { Component } from 'react'

class App extends Component {
    constructor(){
        super()
        this.state={
            mydata:[]
        }
    }
    componentDidMount(){
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res=>this.setState({mydata:res.data}))
    }


  render() {
    return (
      <>
     {this.state.mydata.slice(0,3).map((item,c)=>(
        <li key={item.id}>{c+1}{item.name}</li>
     ))}
      </>
    )
  }
}

export default App