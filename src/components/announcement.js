import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Announcement extends Component {
  render() {
    return (
      <div className="announcement">
        Announcement: Join us on <Link to="#">December 4th</Link> for.....
      </div>
    );
  }
}
