import React, { Component } from "react";

class DataForm extends Component {
  constructor(props) {
    super(props);
    this.objectMaker = this.objectMaker.bind(this);
    // // this.handleSubmit = this.handleSubmit.bind(this);
  }
  objectMaker(id, name, img) {
    return {
      id,
      name,
      img
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const inputID = e.target.elements.id.value.trim();
    const inputNAME = e.target.elements.name.value.trim();
    const inputIMG = e.target.elements.img.value.trim();
    const itemName = e.target.elements.itemKey.value.trim();
    const pushObject = {
      id: inputID,
      name: inputNAME,
      img: inputIMG
    };

    console.log(pushObject);

    localStorage.setItem(itemName, JSON.stringify(pushObject));
  }

  render() {
    return (
      <div className="data-form">
        <form onSubmit={this.handleSubmit} type="text">
          <input type="text" name="itemKey" placeholder="itemName" />
          <input type="text" name="id" placeholder="id" />
          <input type="text" name="name" placeholder="name" />
          <input type="text" name="img" placeholder="icon" />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default DataForm;
