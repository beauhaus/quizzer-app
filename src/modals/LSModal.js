import React, { Component } from "react";
import Modal from "react-modal";
import Styled from "styled-components";
import GradedList from "./GradedList";

const StyledLSModal = Styled.div`

`;
class LSMODAL extends Component {
  constructor(props) {
    super(props);
    // this.LSModalClose = this.LSModalClose.bind(this);
  }
  componentDidMount() {
    console.log("LS DIDMOUNT");
    this.forceUpdate();
  }
  componentWillMount() {
    Modal.setAppElement("body"); // a11y
  }
  // lsModalCloser() {
  //   this.props.LSModalClose;
  // }
  render() {
    const {
      LSModalClose,
      showLSModal,
      allLSQuizNames,
      gradedLSQuizzes
    } = this.props;
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
