import React from "react";
import Modal from "react-modal";
import Styled from "styled-components";

const StyledCompleteMsg = Styled.section`
width: 100vw;
  height: 100vh;
  background: linear-gradient(45deg, #ECEAEA 0%, #DAD4D4 100%);
  font-family: 'Montserrat', Tahoma, Geneva, Verdana, sans-serif;

  grid-row: 1/4;
  grid-column: 3;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 30vh 10vh 10vh;
  grid-template-columns: 10vw 50vw 10vw;

h1{
  color: rgba(98, 77, 77, 0.5);
  font-size: 4rem;
  font-weight: 200;
  grid-row: 1;
  grid-column: 2;
  text-align: center;
  animation: fadein 2s;
}
  @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }
`;

const QCompleteModal = props => {
  // const { options, answer } = props.payload;
  // console.log(props.qLength);
  return (
    <Modal
      isOpen={props.showQCompleteModal}
      onRequestClose={props.qCompleteModalClose}
      className="modal q-complete-modal"
      contentLabel="qComplete Modal"
      closeTimeoutMS={2000}
    >
      <StyledCompleteMsg>
        <h2 className="qPrompt">TEST</h2>
        <div className="mulit-choice-container">
          <h1>Nice!</h1>
        </div>
        <button
          className="modal__btn--done"
          onClick={props.qCompleteModalClose}
        >
          OK
        </button>
      </StyledCompleteMsg>
    </Modal>
  );
};

export default QCompleteModal;
