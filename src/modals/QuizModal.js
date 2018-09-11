import React, { Component } from "react";
import Modal from "react-modal";

import QuizDisplay from "./QuizDisplay";

class QuizModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: ""
    };

    // this.answerClickHandler = this.answerClickHandler.bind(this);
  }
  componentDidMount() {
    console.log("QM mounted");
  }
  componentWillMount() {
    Modal.setAppElement("body"); // a11y
  }
  componentWillUnmount() {
    console.log("unmount");
  }
  // answerClickHandler(qGuess, answer) {

  //   // this.incrementer();
  //   console.log("INCREMENT HERE!");
  // }
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
          quizModalClose={this.props.quizModalClose}
          payload={this.props.payload}
          quizName={this.props.quizName}
          resultsRecord={this.props.resultsRecord}
        />
      </Modal>
    );
  }
}

export default QuizModal;
