import React, { Component } from "react";
//sử dụng hình ảnh nằm trong folder public => dẫn url từ html
export default class Ex_Car extends Component {
  state = {
    color: "black",
  };
    handlePickColor = (color) => {
        console.log("first")
    this.setState({
      color: color,
    });
  };
  render() {
    let url = `./imageSrc/CarBasic/products/${this.state.color}-car.jpg`;
      return (
        
      <div className="container">
        <img
          style={{
            width: "40%",
          }}
          src={url}
          alt=""
        />
        <button
          onClick={() => this.handlePickColor("red")}
          className="btn btn-danger"
        >
          Red
        </button>
        <button
          onClick={() => this.handlePickColor("black")}
          className="btn btn-dark"
        >
          Black
        </button>
        <button
          onClick={() => this.handlePickColor("silver")}
          className="btn btn-secondary"
        >
          Silver
        </button>
      </div>
    );
  }
}
