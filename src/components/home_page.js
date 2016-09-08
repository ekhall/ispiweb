import React, { Component } from 'react';
import Masthead from './masthead';
import Introduction from './introduction';
import Detail from './detail';
import Announcement from './announcement';
import Footer from './footer';

export default class HomePage extends Component {
  render() {
    return(
      <div>
        <Masthead />
        <Announcement />
        <Introduction />
        <Detail />
        <Footer />
      </div>
    );
  };
}
