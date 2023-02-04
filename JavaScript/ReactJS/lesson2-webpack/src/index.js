import React from "react";
import ReactDOM  from "react-dom";
import './sass/style.scss';
import myphoto from './img/unsplash.jpg'
class App extends React.Component{
    render(){
        return(
            <>
            <img width={300} src={myphoto} alt="err" />
            <h1>Hello React</h1>
            <p>Webpack is awesome!</p>
            </>
        )
    }
}


ReactDOM.render(<App />,document.querySelector('#root'));