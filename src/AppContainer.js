import React, { Component } from "react";
// import { render } from "react-dom";
import Styled from "styled-components";

import QuizHeader from "./Landing/QuizHeader";
import QuizBtns from "./Landing/QuizBtnContainer";
import LSModal from "./modals/LSModal";
import QuizModal from "./modals/QuizModal";
import QComplete from "./modals/QCompleteModal";

// import DataForm from "./DataForm";
// <DataForm />

const StyledAppContainer = Styled.div`
    font-family: "Lato", sans-serif;
    font-weight: 100;
    font-size: 20px;
    background: linear-gradient(45deg, #ECEAEA 0%, #ddd 100%);
    width: 100vw;
    height: 100vh;
    position: relative;
    text-align: center;
    .info-box {
      width: 100vw;
      height: 20vh;
      & p {
        text-align: center;
        font-weight: 200;
        width: 80vw;
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
      showQCompleteModal: false
    };
    this.handleGetLSClick = this.handleGetLSClick.bind(this);
    this.handleLoadDefQ1 = this.handleLoadDefQ1.bind(this);
    this.quizModalCloser = this.quizModalCloser.bind(this);
    this.qCompleteModalCall = this.qCompleteModalCall.bind(this);
    this.qCompleteModalCloser = this.qCompleteModalCloser.bind(this);
    this.resultsRecord = this.resultsRecord.bind(this);
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

  //THIS FUNCTION ALSO DISPLAYS MODAL
  handleLoadDefQ1() {
    let qName = Object.keys(localStorage);
    let store = localStorage.getItem(qName);
    let storeArr = JSON.parse(store);
    console.log("storeArrlength: ", storeArr.length);

    this.setState({
      showQuizModal: true,
      quizName: qName,
      qLength: storeArr.length,
      quizModalPayload: this.props.lsStatus
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

  qCompleteModalCall() {
    this.setState({
      showQCompleteModal: true
    });
  }
  qCompleteModalCloser() {
    this.setState({
      showQCompleteModal: false
    });
  }
  resultsRecord() {
    console.log("recordQResults");
  }

  render() {
    // {console.log("p>AppC: ", this.props.lsStatus)}
    return (
      <StyledAppContainer className="app-container">
        <QuizHeader
          getStored={this.handleGetLSClick}
          loadInStorage={this.handleLoadToLStorage}
          delStored={this.handleDelClick}
          resetDB={this.props.initDB}
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
          quizModalClose={this.quizModalCloser}
          showQuizModal={this.state.showQuizModal}
          payload={this.state.quizModalPayload}
          quizName={this.state.quizName}
          qLength={this.state.qLength}
          qCompleteCall={this.qCompleteModalCall}
          resultsRecord={() => this.resultsRecord()}
        />
        <QComplete
          qCompleteModalClose={this.qCompleteModalCloser}
          showQCompleteModal={this.state.showQCompleteModal}
          quizName={this.state.quizName}
        />
      </StyledAppContainer>
    );
  }
}

export default AppContainer;
