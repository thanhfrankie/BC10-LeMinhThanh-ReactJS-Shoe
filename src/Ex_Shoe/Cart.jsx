import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="col-12">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price * item.amount}</td>
                  <td>
                    <button
                      className="btn-dark"
                      onClick={() => this.props.handleMinusAmount(item)}
                    >
                      -
                    </button>
                    <strong>{item.amount}</strong>
                    <button
                      className="btn-warning"
                      onClick={() => this.props.handleAddAmount(item)}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <img
                      src={item.image}
                      style={{
                        width: 80,
                      }}
                      alt=""
                    />
                  </td>

                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => this.props.handleDeleteShoe(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
