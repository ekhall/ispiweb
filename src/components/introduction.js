import React, { Component } from 'react';

export default class Introduction extends Component {
  render() {
    return(
      <div className="detail">
      <div className="ui vertical stripe segment">
          <div className="ui middle aligned stackable grid container">
            <div className="row">
              <div className="eight wide column">
                <h3 className="ui header">We Improve Pediatric Healthcare</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <h3 className="ui header">We Make Bananas That Can Dance</h3>
                <p>Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
              </div>
              <div className="six wide right floated column">
              <div className="ui card">
                <div className="image">
                  <img src="/assets/molly.png"/>
                </div>
                <div className="content">
                  <a className="header">Kristy</a>
                  <div className="meta">
                    <span className="date">Cleveland</span>
                  </div>
                  <div className="description">
                    Kristy is a thumb surgeon living in Ohio.
                  </div>
                </div>
                <div className="extra content">
                  <a>
                    <i className="user icon"></i>
                    22 Friends
                  </a>
                </div>
              </div>
              </div>
            </div>
            <div className="row">
              <div className="center aligned column">
                <a className="ui huge button">Check Them Out</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
