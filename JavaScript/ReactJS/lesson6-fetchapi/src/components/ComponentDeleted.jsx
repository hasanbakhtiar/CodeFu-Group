import React, { Component } from 'react'
class  List extends Component{
    componentWillUnmount(){
        alert('list is deleted!')
    }
    render(){
        return(
            <ul>
                <li>test list</li>
                <li>test list</li>
                <li>test list</li>
                <li>test list</li>
                <li>test list</li>
            </ul>
        )
    }
}



class ComponentDeleted extends Component {
    constructor(){
        super();
        this.state={
            countOne:0,
            countTwo:100,
            display:true
        }
    }

    componentDidUpdate(){
      this.state.countTwo -= 1;
    }


    
  render() {

    let data ;
    if(this.state.display){
        data = <List />
    }

    return (
      <div className='container mt-5'>
        {this.state.countOne} <hr />
        {this.state.countTwo}
        {data}
        <button className='btn btn-primary' onClick={()=>{
                this.setState({
                    countOne:this.state.countOne + 1
                })
        }}>action</button>
        <button className='btn btn-danger ms-3' onClick={()=>{
                this.setState({
                    display:false
                })
        }}>delete</button>
        
        
      </div>
    )
  }
}

export default ComponentDeleted