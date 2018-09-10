import React, { Component } from "react";
// import { render } from "react-dom";
import Styled from "styled-components";

import QuizHeader from "./QuizHeader";
import QuizBtns from "./QuizBtnContainer";
import LSModal from "./LSModal";
import QuizModal from "./QuizModal";

// import DataForm from "./DataForm";
// <DataForm />

const StyledAppContainer = Styled.div`
    font-family: "Lato", sans-serif;
    font-weight: 100;
    font-size: 20px;
    background: linear-gradient(45deg, #ECEAEA 0%, #ddd 100%);
    width: 100vw;
    height: 150vh;
    position: relative;
    text-align: center;
    .info-box {
      width: 100vw;
      height: 20vh;
      & p {
        text-align: center;
        font-weight: 200;
        width: 80vw;
        border: 1px solid gold;
        margin: 0 auto;
      }
    }

    h1 {
      font-weight: 100;
    }
    
`;

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      db: [],
      showLSModal: false,
      showQuizModal: false,
      showDefQ1Modal: false,
      showDefQ2Modal: false,
      itemToPush: "",
      newDBCategory: ""
    };
    this.handleGetLSClick = this.handleGetLSClick.bind(this);
    this.handleLoadDefQ1 = this.handleLoadDefQ1.bind(this);
  }

  // GOTO this spot for a list of LS keys (topics)
  // https://stackoverflow.com/questions/17745292/how-to-retrieve-all-localstorage-items-without-knowing-the-keys-in-advance

  //THIS ALSO SHOWS MODAL
  handleGetLSClick() {
    //Place onto state
    this.setState({
      showLSModal: true,
      lsModalPayload: Object.keys(localStorage)
    });
  }

  handleDelClick() {
    localStorage.clear();
    // console.log("deleted All");
  }

  //THIS ALSO SHOWS MODAL
  handleLoadDefQ1() {
    //Place onto state
    this.setState({
      showQuizModal: true,
      quizName: "ICONQUZ",
      quizModalPayload: [
        {
          id: "100",
          question: "nerd",
          options: ["💩", "😅", "😜", "🤓"],
          answer: "🤓"
        },
        {
          id: "101",
          question: "crying",
          options: ["🤭", "😭", "🙄", "😳"],
          answer: "😭"
        }
      ]
    });
  }

  LSModalCloser() {
    this.setState({
      showLSModal: false
    });
  }

  quizModalCloser() {
    this.setState({
      showQuizModal: false
    });
  }

  /*
  handleLoadDefQ2() {
    console.log("handleLoadDefQ2");
  }
  handleCustomQ() {
    console.log("handleCustom");
  }
  */

  render() {
    return (
      <StyledAppContainer className="app-container">
        <QuizHeader
          getStored={this.handleGetLSClick}
          loadInStorage={this.handleLoadToLStorage}
          delStored={this.handleDelClick}
          reset={this.props.reset}
        />
        <h1>What do you want to learn?</h1>
        <QuizBtns
          defaultQ1={this.handleLoadDefQ1}
          defaultQ2={this.handleLoadDefQ2}
          customQ={this.handleCustomQ}
        />
        <div className="info-box">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            ipsum nesciunt non ea nobis optio ab quidem quas quos eveniet
            tenetur ex omnis eius soluta nulla, reiciendis minima itaque fugiat.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            ipsum nesciunt non ea nobis optio ab quidem quas quos eveniet
            tenetur ex omnis eius soluta nulla, reiciendis minima itaque fugiat.
          </p>
        </div>

        <LSModal
          LSModalClose={() => this.LSModalCloser()}
          showLSModal={this.state.showLSModal}
          currentLS={this.state.lsModalPayload}
        />
        <QuizModal
          quizModalClose={() => this.quizModalCloser()}
          showQuizModal={this.state.showQuizModal}
          payload={this.state.quizModalPayload}
          quizName={this.state.quizName}
        />
      </StyledAppContainer>
    );
  }
}

export default AppContainer;
