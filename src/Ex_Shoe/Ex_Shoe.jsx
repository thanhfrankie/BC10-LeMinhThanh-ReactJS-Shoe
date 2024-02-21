import React, { Component } from "react";
import { shoeArr } from "./data";
import List from "./List";
import Detail from "./Detail";
import Cart from "./Cart";

export default class Ex_Shoe extends Component {
  state = {
    shoeArr: shoeArr,
    detail: shoeArr[0],
    cart: [], // chứa object shoe khi user click button add
  };
  handleChangeDetail = (shoe) => {
    this.setState({
      detail: shoe,
    });
  };
  handleAddToCart = (shoe) => {
    /**
     * TH1: sản phẩm chưa có trong giỏ hàng => push và số lượng mặc định là 1
     * TH2: sản phẩm đã có trong giỏ hàng => không push, tăng số lượng thêm 1
     */
    let cloneCart = [...this.state.cart];
    // cloneCart.push(shoe)
    // kiểm tra sản phẩm được thêm có trong giỏ hàng chưa
    let index = cloneCart.findIndex((item) => {
      return item.id === shoe.id;
    });
    console.log(index);
    if (index == -1) {
      // không tìm thấy => th1
      // tạo object mới từ object cũ có thêm key amount
      let newShoe = { ...shoe, amount: 1 };
      // cloneCart.push(newShoe)
      cloneCart = [newShoe, ...this.state.cart];
    } else {
      // tìm thấy => TH2
      // tăng số lượng lên 1
      cloneCart[index].amount++;
    }
    this.setState({
      // cart: [shoe, ...this.state.cart],
      cart: cloneCart,
    });
  };
  handleAddAmount = (shoe) => {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => {
      return item.id === shoe.id;
    });
    cloneCart[index].amount++;
    this.setState({
      // cart: [shoe, ...this.state.cart],
      cart: cloneCart,
    });
  };
  handleMinusAmount = (shoe) => {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => {
      return item.id === shoe.id;
    });
    cloneCart[index].amount--;
    if (cloneCart[index].amount === 0) {
      alert("Sản phẩm sẽ được xóa khỏi giỏ hàng")
      cloneCart.splice(index, 1);
    }
    
    this.setState({
      // cart: [shoe, ...this.state.cart],
      cart: cloneCart,
    });
  };
  handleDeleteShoe = (shoe) => {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => {
      return item.id === shoe.id;
    });
    cloneCart.splice(index, 1);
    this.setState({
      // cart: [shoe, ...this.state.cart],
      cart: cloneCart,
    });
  };
  render() {
    return (
      <div className="row w-100">
        <Cart
          cart={this.state.cart}
          handleAddAmount={this.handleAddAmount}
          handleMinusAmount={this.handleMinusAmount}
          handleDeleteShoe={this.handleDeleteShoe}
        />
        <List
          handleViewDetail={this.handleChangeDetail}
          handleAddToCart={this.handleAddToCart}
          shoeArr={this.state.shoeArr}
        />
        <Detail shoe={this.state.detail} />
      </div>
    );
  }
}
