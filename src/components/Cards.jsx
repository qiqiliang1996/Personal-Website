import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Stories About Qiqi and Chubby</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-korea2.jpg"
              text="Qiqi studied abroad in Souel, South Korea 2018"
              label="Travel"
              path="/korea"
            />
            <CardItem
              src="images/img-japan.jpg"
              text="Qiqi was in Tokyo, Japan 2018"
              label="Travel"
              path="/japan"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-chubby1.jpg"
              text="Chubby's first day being home with me on Mar 2021"
              label="Chubby"
              path="/chubbyhome"
            />
            <CardItem
              src="images/img-chubby2.jpg"
              text="Chubby was very sick and in ICU on Sep 2021"
              label="Chubby"
              path="/chubbysick"
            />
            <CardItem
              src="images/img-chubby3.jpg"
              text="Chubby is recovered and very active on Nov 2021"
              label="Chubby"
              path="/chubbyrecovered"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
