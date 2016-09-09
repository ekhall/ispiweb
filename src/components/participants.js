import React, { Component } from 'react';

export default class Participants extends Component {
  render() {
    return(
      <div className="detail">
        <div className="ui vertical stripe segment">
          <div className="ui middle aligned stackable grid container">
            <h1 className="ui header">Participating Institutions</h1>
                  <div className="ui grid">
                    <div className="four wide column">
                      <img className="participant" src="/assets/participants/choc.png" />
                    </div>
                    <div className="four wide column">
                      <img className="participant" src="/assets/participants/bambinogesu.png" />
                    </div>
                    <div className="four wide column">
                      <img className="participant" src="/assets/participants/choc.png" />
                    </div>
                    <div className="four wide column">
                      <img className="participant" src="/assets/participants/bambinogesu.png" />
                    </div>
                    <div className="four wide column">
                      <img className="participant" src="/assets/participants/choc.png" />
                    </div>
                    <div className="four wide column">
                      <img className="participant" src="/assets/participants/bambinogesu.png" />
                    </div>
                  </div>
          </div>
        </div>
      </div>
    );
  }
}
