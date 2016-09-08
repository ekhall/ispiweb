import React, { Component } from 'react';

export default class Masthead extends Component {
  render() {
    return(
      <div className="ui inverted vertical masthead center aligned segment">

          <div className="ui container">
            <div className="ui large secondary inverted pointing menu borderless">
              <a className="toc item">
                <i className="sidebar icon"></i>
              </a>
              <a className="active item">Home</a>
              <a className="item">News</a>
              <a className="item">Blog</a>
              <div className="right item">
                <a className="ui button">Log in</a>
              </div>
            </div>
          </div>

          <div className="ui text container">
            <h1 className="ui inverted header">
              International Society<br/> for Pediatric Innovation
            </h1>
            <h2>Improving child health with innovation</h2>
            <div className="ui huge primary button">Join Us <i className="right arrow icon"></i></div>
          </div>

        </div>
    );
  }
}
