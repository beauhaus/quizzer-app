import React, { Component } from "react";
import Modal from "react-modal";
import Styled from "styled-components";
import GradedList from "./GradedList";

const StyledLSBtn = Styled.button`
  grid-column: 3;
  grid-row: 1;
  cursor: pointer;
  font-size: 3rem;
  border: 1px solid #bbb;
  color: #bbb;
  &:hover {
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.2);
    background: #eeeeef;
    color: #a35;
    border: 1px solid #a35;
  }
`;

const StyledLSModal = Styled.div`
  background: linear-gradient(45deg, #ddd 0%, #fff 100%);
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.2);
  color: #a35;
  font-family: "Montserrat", sans-serif;
  font-weight: 100;
  text-align: center;
  grid-row: 2;
  grid-column: 2;
  display: grid;
  grid-template-columns: repeat(2, 40vw);
  grid-template-rows: 80vh;
  padding: 0;

.quiz-list {
  grid-column: 1;
  grid-row: 1;
  border: 1px solid maroon;
  color: #a35;
  padding: 1rem;
  margin: 0;
  text-shadow: none;
  font-size: 3rem;
  &> li:hover {
    cursor: pointer;
    font-weight: 300;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  }
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
    return (
      <Modal
        className="modal ls-modal"
        isOpen={showLSModal}
        onRequestClose={LSModalClose}
        contentLabel="LocalStorage Items"
        closeTimeoutMS={2000}
      >
        <StyledLSBtn className="modal__btn--done" onClick={LSModalClose}>
          X
        </StyledLSBtn>
        <h1 className="storage-title">Available Records</h1>
        <StyledLSModal className="styled-LS-modal">
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
