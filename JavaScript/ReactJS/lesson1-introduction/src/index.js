
const list = (
  <ul style={{color:"red",fontSize:"20px"}}>
    <li >Pen</li>
    <li>Book</li>
    <li>Ruler</li>
  </ul>
);


const myFunc=()=>{

}
const temp = (
  <div>
    <h1 onClick={myFunc}>Hello React</h1>
    {list}
    {list}
    {list}
    {list}
    {list}
  </div>
);

ReactDOM.render(temp, document.querySelector("#root"));
