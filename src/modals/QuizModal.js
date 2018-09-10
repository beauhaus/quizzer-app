import React, { Component } from "react";
import Modal from "react-modal";

import QuizDisplay from "./QuizDisplay";

class QuizModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: "holder",
      quizArrayLen: 0,
      qCounter: 0
    };
    this.incrementer = this.incrementer.bind(this);
    this.decrementer = this.decrementer.bind(this);
  }
  componentWillMount() {
    Modal.setAppElement("body"); // a11y
    // console.log(this.props.payload);
  }
  incrementer() {
    console.log("inc!");
    this.setState(prevState => ({
      qCounter: prevState.qCounter + 1
    }));
  }
  decrementer() {
    console.log("DEC!");
    this.setState(prevState => ({
      qCounter: prevState.qCounter - 1
    }));
  }
  render() {
    const { qCounter } = this.state;
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
          qCounter={this.state.qCounter}
          quizName={this.props.quizName}
          incrementer={this.incrementer}
          decrementer={this.decrementer}
        />
      </Modal>
    );
  }
}

export default QuizModal;
