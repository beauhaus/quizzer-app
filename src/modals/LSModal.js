import React, { Component } from "react";
import Modal from "react-modal";
import Styled from "styled-components";

const StyledLSModal = Styled.div`
  background: wheat;
  color: maroon;
  font-family: "Montserrat", sans-serif;
  font-weight: 100;
  text-align: center;
  position: relative;
  button {
    font-family: "Montserrat", sans-serif;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    width: 12vw;
    height: 8vh;
    border: 1px solid #000;
    background: wheat;
    color: #000;
    font-size: 3rem;
  }
  h1 {
    font-weight: 100;
  }
  ul {
    margin: 0 auto;
    width: 80vw;
    height: 80vh;
    text-align: left;
  }
`;
class LSMODAL extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    Modal.setAppElement("body"); // a11y
  }
  render() {
    const { LSModalClose, showLSModal, allLSQuizNames } = this.props;
    console.log("t.s.qizNames: ", allLSQuizNames);
    return (
      <Modal
        className="modal ls-modal"
        isOpen={showLSModal}
        onRequestClose={LSModalClose}
        contentLabel="LocalStorage Items"
        closeTimeoutMS={2000}
      >
        <StyledLSModal>
          <h1>Available Quizzes</h1>
          <button className="modal__btn--done" onClick={LSModalClose}>
            X
          </button>
          <ul>
            {allLSQuizNames &&
              allLSQuizNames.map((topic, idx) => (
                <li key={topic}>
                  {idx + 1}. {topic}
                </li>
              ))}
          </ul>
        </StyledLSModal>
      </Modal>
    );
  }
}

export default LSMODAL;
