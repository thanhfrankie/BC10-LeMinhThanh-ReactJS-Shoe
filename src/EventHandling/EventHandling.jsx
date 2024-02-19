import React, { Component } from "react";

export default class EventHandling extends Component {
  // hàm không có tham số
  sayHello = () => {
    console.log("hello");
  };

  // hàm có tham số => dùng arrow function bọc lại
  sayHelloWithName = (name) => {
    console.log("🥶 - EventHandling - name:", name);
  };
  render() {
    return (
      <div className="container display-4">
        <h2>EventHandling</h2>
        <button onClick={this.sayHello}>Hello</button>
        <button
          onClick={() => {
            this.sayHelloWithName("alice");
          }}
        >
          Hello A
        </button>
      </div>
    );
  }
}
