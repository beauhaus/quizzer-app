import React, { Component } from "react";
import Modal from "react-modal";

class LSMODAL extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    Modal.setAppElement("body"); // a11y
  }
  render() {
    return (
      <Modal
        className="modal ls-modal"
        isOpen={this.props.showLSModal}
        onRequestClose={this.props.lSModalClose}
        contentLabel="LocalStorage Items"
        closeTimeoutMS={2000}
      >
        <h1>LSMODAL</h1>
        <button className="modal__btn--done" onClick={this.props.LSModalClose}>
          OK
        </button>
        <ul>
          {Object.keys(localStorage).length &&
            Object.keys(localStorage).map((topic, idx) => (
              <li key={idx}>{topic}</li>
            ))}
        </ul>
      </Modal>
    );
  }
}

export default LSMODAL;
