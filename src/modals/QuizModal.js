import React, { Component } from "react";
import Modal from "react-modal";

import { objArrMaker } from "../utils";

import QuizDisplay from "./QuizDisplay";

class QuizModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: "",
      gradedArr: []
    };

    this.resultsRecord = this.resultsRecord.bind(this);
    this.quizModalCloseHandler = this.quizModalCloseHandler.bind(this);
    // this.sendGradedRecord = this.sendGradedRecord.bind(this);
    // this.answerClickHandler = this.answerClickHandler.bind(this);
  }
  componentDidMount() {
    console.log("QM mounted");
  }
  componentWillMount() {
    Modal.setAppElement("body"); // a11y
  }
  quizModalCloseHandler() {
    console.log("QM Modal closeHandler");
    this.props.quizModalClose();
    this.resultsRecord();
  }
  resultsRecord(qName, qPrompt, boolGrade) {
    let obj = { qPrompt: qPrompt, grade: boolGrade };
    this.setState(prevState => {
      return {
        currentQName: qName,
        gradedArr: prevState.gradedArr.concat(obj)
      };
    });
  }
  componentWillUnmount() {
    console.log("QM Unmounted");

    // localStorage.setItem(JSON.stringify(this.state.currentQName));
  }
  render() {
    return (
      <Modal
        className="modal quiz-modal"
        isOpen={this.props.showQuizModal}
        onRequestClose={this.props.quizModalClose}
        contentLabel="Quiz Modal"
        closeTimeoutMS={2000}
      >
        <QuizDisplay
          quizModalClose={this.quizModalCloseHandler}
          payload={this.props.payload}
          quizName={this.props.quizName}
          // resultsRecord={this.resultsRecord}
          answerHandler={this.answerHandler}
          // sendGradedRecord={this.sendGradedRecord}
        />
      </Modal>
    );
  }
}

export default QuizModal;
