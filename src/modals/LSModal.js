import React, { Component } from "react";
import Modal from "react-modal";
import Styled from "styled-components";
import GradedList from "./GradedList";

const StyledLSModal = Styled.div`
  background: wheat;
  color: maroon;
  font-family: "Montserrat", sans-serif;
  font-weight: 100;
  text-align: center;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 10vw repeat(2, 40vw) 10vw;
  grid-template-rows: 10vh 80vh 10vh;

  h1 {
    font-weight: 100;
    grid-column: 2/4;
    grid-row: 1;
    height: 100%;
    margin: 0;
    padding: 0%;
  }

   .modal__btn--done {
    grid-column: 4;
    grid-row: 1;
    background: red;
    cursor: pointer;
    background: wheat;
    color: #000;
    font-size: 3rem;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
    box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.2);
  }
  .quiz-list {
    grid-column: 2;
    grid-row: 2;
    border: 1px solid maroon;
    color: purple;
    height: 100%;
  }
`;
class LSMODAL extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("LS DIDMOUNT");
    this.forceUpdate();
  }
  componentWillMount() {
    Modal.setAppElement("body"); // a11y
  }

  render() {
    const {
      LSModalClose,
      showLSModal,
      allLSQuizNames,
      gradedLSQuizzes
    } = this.props;
    {
      console.log("p> LSModal: ", this.props);
    }
    return (
      <Modal
        className="modal ls-modal"
        isOpen={showLSModal}
        onRequestClose={LSModalClose}
        contentLabel="LocalStorage Items"
        closeTimeoutMS={2000}
      >
        <StyledLSModal className="styled-LS-modal">
          <h1>Available Stored Items</h1>
          <button className="modal__btn--done" onClick={LSModalClose}>
            X
          </button>
          <ol className="quiz-list">
            {typeof allLSQuizNames !== "undefined" &&
            allLSQuizNames.length > 0 ? (
              allLSQuizNames.map(name => <li key={name}>{name}</li>)
            ) : (
              <li>You are Empty</li>
            )}
          </ol>
          <GradedList gradedList={gradedLSQuizzes} />
        </StyledLSModal>
      </Modal>
    );
  }
}

export default LSMODAL;
