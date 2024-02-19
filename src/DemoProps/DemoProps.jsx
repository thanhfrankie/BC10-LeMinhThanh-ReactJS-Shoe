import React, { Component } from "react";
import Card from "./Card";

export default class DemoProps extends Component {
  state = {
    username: "Iron man",
  };
  handleChangeName = (name) => {
    this.setState({
      username: this.state.username == "Iron man" ? name : "Iron man",
    });
  };
  render() {
    let title = "User Profile";
    return (
      <div className="container">
        <h2>DemoProps</h2>
        <Card
          handleChangeName={this.handleChangeName}
          username={this.state.username}
          titleCard={title}
          imgSrc={
            "https://static2-images.vnncdn.net/files/publish/2022/12/8/meo-1-1416.jpg"
          }
        />
      </div>
    );
  }
}
