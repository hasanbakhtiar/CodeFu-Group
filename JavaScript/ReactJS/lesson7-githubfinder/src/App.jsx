import axios from "axios";
import { Component } from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Users from "./components/Users";

 class App extends Component {
  constructor(){
    super();
    this.state={
      users:[]
    }
  }
  componentDidMount(){
    document.querySelector('h1').style.display = 'none';
  }
  searchUser=(keyword)=>{
    axios
    .get(`https://api.github.com/search/users?q=${keyword}`)
    .then(res=>this.setState({users:res.data.items}))
   
  }
  render() {
    return (
      <>
        <Nav />
        <Search searchValue={this.searchUser}/>
        <div className="container">
       {this.state.users.length === 0 ? <h1 className="text-center">No Users</h1> :  <Users uservalue={this.state.users}/> }
        </div>
      </>
    );
  }
}

export default App;
