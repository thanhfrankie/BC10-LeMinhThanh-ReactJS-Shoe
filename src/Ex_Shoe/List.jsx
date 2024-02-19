import React, { Component } from "react";
import Item from "./Item";

export default class extends Component {
    renderListShoe = () => {
        return this.props.shoeArr.map((item) => {
          return <Item handleClickView={this.props.handleViewDetail} key={item.id} data={item} handleClickAdd={ this.props.handleAddToCart} />
        })
    }
  render() {
      return <div className="row col-7">
        {this.renderListShoe()}
    </div>;
  }
}
