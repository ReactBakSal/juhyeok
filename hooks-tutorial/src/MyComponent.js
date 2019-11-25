import React, { Component } from "react";

class MyComponet extends Component {
  id = 1;
  setID = n => {
    this.id = n;
  };
  printId = () => {
    console.log(this.id);
  };

  render() {
    return <div>MyComponet</div>;
  }
}

export default MyComponet;
