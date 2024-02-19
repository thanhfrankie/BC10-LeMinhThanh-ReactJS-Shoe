import React, { Component } from "react";
import "./style.css"
// binding {}
export default class DataBinding extends Component {
    // thuộc về class (component) => sử dụng this
    title = "Profile User"
    renderButton = () => {
        return <button className="btn btn-secondary">Logout</button>
    }
    render() {
      let username = "alice"
    return (
      <div className="container display-4">
            <p>DataBinding</p>
            <h2>{this.title}</h2>
            <p style={{
                // fontSize: "100px",color: "red"
            }}>Hello {username}</p>
            {this.renderButton()}
      </div>
    );
  }
}
