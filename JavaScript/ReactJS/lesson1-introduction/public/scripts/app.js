"use strict";

var list = /*#__PURE__*/React.createElement("ul", {
  style: {
    color: "red",
    fontSize: "20px"
  }
}, /*#__PURE__*/React.createElement("li", null, "Pen"), /*#__PURE__*/React.createElement("li", null, "Book"), /*#__PURE__*/React.createElement("li", null, "Ruler"));
var myFunc = function myFunc() {};
var temp = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  onClick: myFunc
}, "Hello React"), list, list, list, list, list);
ReactDOM.render(temp, document.querySelector("#root"));
