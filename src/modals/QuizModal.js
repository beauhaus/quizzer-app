import React, { Component } from "react";
import Modal from "react-modal";

import QuizDisplay from "./QuizDisplay";

class QuizModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: ""
    };

    this.quizModalCloseHandler = this.quizModalCloseHandler.bind(this);
  }
  componentDidMount() {
    // console.log("QM mounted");
  }
  componentWillMount() {
    Modal.setAppElement("body"); // a11y
  }
  quizModalCloseHandler() {
    // console.log("QM Modal closeHandler RUN!");
    this.props.quizModalClose();
  }
  componentWillUnmount() {
    // console.log("QM Unmounted");
  }
  render() {
    return (
      <Modal
        className="modal quiz-modal"
        isOpen={this.props.showQuizModal}
        onRequestClose={this.props.quizModalClose}
        contentLabel="Quiz Modal"
        closeTimeoutMS={1000}
      >
        <QuizDisplay
          quizModalClose={this.quizModalCloseHandler}
          quizArray={this.props.quizArray}
          quizName={this.props.quizName}
        />
      </Modal>
    );
  }
}

export default QuizModal;
