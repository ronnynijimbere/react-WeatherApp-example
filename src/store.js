//Stores the global App 

import React from "react";

import { EventEmitter } from "events";

export default class Store extends React.Component {
  constructor(props) {
    super(props);

    this.eventEmitter = new EventEmitter();

    //Main App State
    this.state = {
      appName: "Current Weather"
    };
  }

  render() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, { //New React Element is returned as the starting points
        ...this.state, //This state will have the App name
        eventEmitter: this.eventEmitter
      });
    });
  }
}


