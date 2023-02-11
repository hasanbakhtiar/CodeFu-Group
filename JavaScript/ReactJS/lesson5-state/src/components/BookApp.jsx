import React, { Component } from 'react'

export class BookApp extends Component {
    constructor(){
        super();
        this.state={
            bookPhoto:"https://i.pinimg.com/originals/ea/f1/d2/eaf1d2f2d68a2cf606c11676257c86ac.jpg",
            bookName:"1984",
            bookAuther:"George Orwell",
            pageCount:300
        }
    }

    nextBook=()=>{
        this.setState({
            bookPhoto:"https://i0.wp.com/aiptcomics.com/wp-content/uploads/2021/07/BM89_Cv1.jpg?ssl=1",
            bookName:"Batman Comics",
            bookAuther:"unknow",
            pageCount:20
        })
    }
    prevBook=()=>{
        this.setState({
            bookPhoto:"https://i.pinimg.com/originals/ea/f1/d2/eaf1d2f2d68a2cf606c11676257c86ac.jpg",
            bookName:"1984",
            bookAuther:"George Orwell",
            pageCount:300
        })
    }
  render() {
    return (
                <div className="card" style={{width: '18rem'}}>
            <img src={this.state.bookPhoto} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{this.state.bookName}</h5>
                <p className="card-text">{this.state.bookAuther}</p>
                <button onClick={this.prevBook} className="btn me-3 btn-warning">Prev Book</button>
                <button onClick={this.nextBook} className="btn btn-primary">Next Book</button>
            </div>
            </div>

    )
  }
}


export default BookApp
