import React, { Component } from "react";
import Styled from "styled-components";

//Contains wrapper for quizzes and quiz NAVIGATION

const StyledQuizNav = Styled.nav`
    grid-column: 2/-2;
    grid-row: 4;
    text-align: center;
    display: flex;
    justify-content: space-between;
    & button {
        filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));
        &:hover {
            filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
        } 
        &.arrow-right {
            width: 0;
            height: 0;
            border-right: 0px solid transparent;
            border-top: 4.5vh solid transparent;
            border-bottom: 4.5vh solid transparent;
            border-left: 5vw solid #ded9d9;
            background: transparent;
        }
        &.arrow-left {
            background: transparent;
            width: 0;
            height: 0;
            border-top: 4.5vh solid transparent;
            border-bottom: 4.5vh solid transparent;
            border-right: 5vw solid #ded9d9;
            border-left: 0px solid transparent;
        }
        
        &.home {
            width: 15vw;
            height: 80%;
            margin: 1% auto;
            background: #a6cfca;
            color: #fff;
            font-weight: 100;
            font-size: 3.5rem;
        }
`;

class QuizNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: ""
    };
    this.incrementer = this.incrementer.bind(this);
    this.decrementer = this.decrementer.bind(this);
  }

  incrementer() {
    // conditions at completion of quiz...
    if (this.state.qCounter + 1 === this.props.qLength) {
      alert("done");
      //   this.counterReset();
    }
    this.setState(prevState => ({
      qCounter: prevState.qCounter + 1
    }));
  }
  decrementer() {
    this.setState(prevState => ({
      qCounter: prevState.qCounter - 1
    }));
  }

  render() {
    return (
      <StyledQuizNav>
        <button className="btn arrow-left" onClick={this.decrementer} />
        <button
          className="home modal__btn--done"
          onClick={this.props.quizModalClose}
        >
          home
        </button>
        <button className="btn arrow-right" onClick={this.incrementer} />{" "}
      </StyledQuizNav>
    );
  }
}

export default QuizNav;
