import React, { Component } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Content from "./Content";

export default class Ex_Layout extends Component {
  render() {
    return (
      <div className="">
        <Header />
            <div className="row">
                {/* <div className='p-0 bg-success col-4'> */}
          <Navigation />
            {/* </div> */}
          <Content />
        </div>
        <Footer />
      </div>
    );
  }
}
