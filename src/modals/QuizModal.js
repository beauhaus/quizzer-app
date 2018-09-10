import React, { Component } from "react";
import Modal from "react-modal";

import QuizDisplay from "./QuizDisplay";

class QuizModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qLength: props.qLength,
      qCounter: 0,
      currQNum: 1
    };
    this.incrementer = this.incrementer.bind(this);
    this.decrementer = this.decrementer.bind(this);
  }
  componentDidMount() {
    // let len = this.props.payload;
  }
  componentWillMount() {
    Modal.setAppElement("body"); // a11y
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
  answerChecker(qGuess, answer) {
    console.log(qGuess, answer);
    qGuess === answer
      ? console.log(`You guessed ${qGuess}, RIGHT!`)
      : console.log(
          `Aww... you guessed ${qGuess}, but the answer was ${answer}`
        );
  }
  render() {
    const { qCounter } = this.state;
    const { qLength } = this.props;
    // console.log(qLength, "is length √");
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
          ansCheck={this.answerChecker}
        />
      </Modal>
    );
  }
}

export default QuizModal;
