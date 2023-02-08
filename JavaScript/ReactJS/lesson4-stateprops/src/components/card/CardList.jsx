import React, { Component } from "react";
import SingleCard from "./SingleCard";
import mydata from "../../data/data";
class CardList extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="row g-5">
          {mydata.map((item, index) => {
            return (
              <SingleCard
                key={index}
                title={item.title}
                photo={item.img}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default CardList;
