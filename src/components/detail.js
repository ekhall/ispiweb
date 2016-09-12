import React, { Component } from 'react';

export default class Detail extends Component {
  render() {
    return(
      <div className="details">
        <div className="details-inner">
          <h2 className="h2-title">News</h2>
          <div className="ui grid">
            <div className="four wide column news-item">
              <a href="#" className="news-anchor">
                <h2>New Members</h2>
                <ul className="post-meta">
                  <li>September 4, 2016</li>
                  <li>Posted by Kevin</li>
                </ul>
                <p className="post-excerpt">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. [...]
                </p>
                <p className="post-more">
                  Read more →
                </p>
              </a>
            </div>

            <div className="four wide column news-item">
              <a href="#">
                <h2>Upcoming Talks</h2>
                <ul className="post-meta">
                  <li>September 3, 2016</li>
                  <li>Posted by Laura</li>
                </ul>
                <p className="post-excerpt">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. [...]
                </p>
                <p className="post-more">
                  Read more →
                </p>
              </a>
            </div>

            <div className="four wide column news-item">
              <a href="#">
                <h2>Points of Note</h2>
                <ul className="post-meta">
                  <li>September 2, 2016</li>
                  <li>Posted by Anthony</li>
                </ul>
                <p className="post-excerpt">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. [...]
                </p>
                <p className="post-more">
                  Read more →
                </p>
              </a>
            </div>

            <div className="four wide column news-item">
              <a href="#">
                <h2>Something to See</h2>
                <ul className="post-meta">
                  <li>August 14, 2016</li>
                  <li>Posted by Laura</li>
                </ul>
                <p className="post-excerpt">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. [...]
                </p>
                <p className="post-more">
                  Read more →
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
