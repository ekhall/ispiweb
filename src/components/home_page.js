import React, { Component } from 'react';
import Header from './header';
import Masthead from './masthead';
import Introduction from './introduction';
import Detail from './detail';
import Announcement from './announcement';
import Footer from './footer';
import Participants from './participants';

export default class HomePage extends Component {
  render() {
    return(
      <div>
        <Header />
        <Masthead />
        <Announcement />
        <Introduction />
        <Detail />
        <Participants />
        <Footer />
      </div>
    );
  };
}
