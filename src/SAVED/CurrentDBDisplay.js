import React, { Component } from "react";
import Styled from "styled-components";
// import Item from "./Item";

const StyledDBDisplay = Styled.div`
  color: white;
  font-family: "Lato", sans-serif;
  font-weight: 100;
  .btn-container {
    width: 10vw;
    border: 1px solid coral;
    height: 10vh;
    float: right;
  }
  .db-display {
    color: #fff;
  }
  font-family: "Lato", sans-serif;
  font-weight: 100;
  list-style: none;
  li {
    color: #9dffad;
    list-style: none;

  }
`;

class CurrentDBDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: "holder"
    };
    this.updateStateHandler = this.updateStateHandler.bind(this);
  }
  updateStateHandler() {
    let getLS = localStorage.getItem("masterDB");
    let parsedData = JSON.parse(getLS);
    this.setState(() => {
      return { db: parsedData };
    });
  }
  render() {
    return (
      <StyledDBDisplay>
        <button onClick={this.updateStateHandler}>getFromLS</button>
        {Array.isArray(this.state.db) &&
          this.state.db.map(item => (
            <ul key={item.id}>
              <li>{item.name}</li>
              <li>{item.img}</li>
              <li>{item.id}</li>
            </ul>
          ))}
      </StyledDBDisplay>
    );
  }
}
// <Item key={item.id} name={item.name} img={item.img} />

export default CurrentDBDisplay;
