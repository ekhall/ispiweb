import React, { Component } from 'react';

export default class Introduction extends Component {
  render() {
    return(
      <div className="detail">
        <div className="about-us">
          The International Society for Pediatric Innovation is comprised of more than 500 healthcare providers worldwide who seek to improve the access, quality, and execution of pediatric medicine to children worldwide. We...
        </div>

        <div className="ui two column centered grid">
          <div className="three column centered row">
            <div className="column detail-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="column detail-text">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>

        </div>

      </div>
    );
  }
}
