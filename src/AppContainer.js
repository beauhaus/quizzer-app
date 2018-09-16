import React, { Component } from "react";
// import { render } from "react-dom";
import Styled from "styled-components";

import QuizHeader from "./landing/QuizHeader";
import QuizBtns from "./landing/QuizBtnContainer";
import LSModal from "./modals/LSModal";
import QuizModal from "./modals/QuizModal";

// import QComplete from "./modals/QCompleteModal";

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
      showAllLS: [], //{Object.keys(localStorage),
      showLSModal: false,
      showQuizModal: false,
      showDefQModal: false,
      showQCompleteModal: false
    };
    this.handleGetAllLSClick = this.handleGetAllLSClick.bind(this);
    this.handleShowDefaultQuizClick = this.handleShowDefaultQuizClick.bind(
      this
    );
    this.quizModalCloser = this.quizModalCloser.bind(this);
    this.qCompleteModalCall = this.qCompleteModalCall.bind(this);
    this.qCompleteModalCloser = this.qCompleteModalCloser.bind(this);
    this.handleLSResetClick = this.handleLSResetClick.bind(this);
  }

  //THIS SHOWS MODAL and FEEDS CONTENTS TO MODAL
  handleGetAllLSClick() {
    // console.log("handleGetAllLSClick");
    const allLSQuizNames = Object.keys(localStorage);

    this.setState({
      showLSModal: true,
      allLSQuizNames
    });
  }

  handleLSResetClick() {
    localStorage.clear();
    this.props.defaultQInsert();
  }

  //DISPLAYS Default Quiz Modal
  handleShowDefaultQuizClick() {
    const { defaultQuizArray, defaultQuizName } = this.props;
    const defaultQuizLength = defaultQuizArray.length;
    this.setState({
      showQuizModal: true,
      quizArray: defaultQuizArray,
      quizName: defaultQuizName,
      quizLength: defaultQuizLength
      //   quizModalPayload: this.props.lSContents
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

  render() {
    {
      console.log("p>quizArray: ", this.state.quizArray);
      console.log("p>quizLength: ", this.state.quizLength);
      console.log("p>Name: ", this.state.quizName);
    }
    return (
      <StyledAppContainer className="app-container">
        <QuizHeader
          getAllLSQuizNames={this.handleGetAllLSClick}
          lsReset={this.handleLSResetClick}
        />
        <h1>What do you want to learn?</h1>
        <QuizBtns
          showDefaultQuiz={this.handleShowDefaultQuizClick}
          customQ={this.handleCustomQ}
        />
        <div className="info-box">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            ipsum nesciunt non ea nobis optio ab quidem quas quos eveniet
            tenetur ex omnis eius soluta nulla, reiciendis minima itaque fugiat.
          </p>
        </div>
        <LSModal
          LSModalClose={() => this.LSModalCloser()}
          showLSModal={this.state.showLSModal}
          allLSQuizNames={this.state.allLSQuizNames}
        />
        <QuizModal
          quizModalClose={this.quizModalCloser}
          showQuizModal={this.state.showQuizModal}
          payload={this.state.quizArray}
          quizName={this.state.quizName}
          qLength={this.state.qLength}
          resultsArchiver={() => this.resultsArchiverHandler()}
          // qCompleteCall={this.qCompleteModalCall}
        />
        {/*
  <QComplete
  qCompleteModalClose={this.qCompleteModalCloser}
  showQCompleteModal={this.state.showQCompleteModal}
  quizName={this.state.quizName}
  />
*/}
      </StyledAppContainer>
    );
  }
}

export default AppContainer;
