import React, { Component } from 'react'
import SingleCard from './SingleCard'

class Users extends Component {
  render() {
    return (
      <div className="row g-5">
        {this.props.uservalue.map(item=>{
            return <SingleCard userdata={item} key={item.id}/>
        })}
      </div>
    )
  }
}

export default Users