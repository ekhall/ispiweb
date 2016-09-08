import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Footer extends Component {
  render() {
    return (
      <div className="ui inverted vertical footer segment">
        <div className="ui container">
          <div className="ui stackable inverted divided equal height stackable grid">
            <div className="three wide column">
              <h4 className="ui inverted header">About</h4>
              <div className="ui inverted link list">
                <a href="#" className="item">Sitemap</a>
                <a href="#" className="item">Contact Us</a>
                <a href="#" className="item">Religious Ceremonies</a>
                <a href="#" className="item">Gazebo Plans</a>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Services</h4>
              <div className="ui inverted link list">
                <a href="#" className="item">Banana Pre-Order</a>
                <a href="#" className="item">DNA FAQ</a>
                <a href="#" className="item">How To Access</a>
                <a href="#" className="item">Other Things</a>
              </div>
            </div>
            <div className="seven wide column">
              <h4 className="ui inverted header">About</h4>
              <p>The International Society for Pediatric Innovation (iSPI) is a group of more than 500 healthcare practitioners worldwide dedicated to improving access and quality of pediatric healthcare through innovative collaborations, advancements, and approaches.</p>
              <p>Website written in <a href="https://facebook.github.io/react/">React</a> + <a href="http://redux.js.org/">Redux</a> by <a href="https://ekhall.gitlab.io">EKH</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
