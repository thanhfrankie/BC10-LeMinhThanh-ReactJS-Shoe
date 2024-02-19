import React, { Component } from 'react'
import { shoeArr } from './data'
import List from './List'

export default class Ex_Shoe extends Component {
    state = {
        shoeArr: shoeArr
    }
  render() {
    return (
        <div>
            <List shoeArray={ this.state.shoeArr} />
      </div>
    )
  }
}
