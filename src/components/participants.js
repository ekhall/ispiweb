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
                      <img className="participant" src="/assets/participants/bambinogesu.png" />
                    </div>
                    <div className="four wide column">
                      <img className="participant" src="/assets/participants/choc.png" />
                    </div>
                    <div className="four wide column">
                      <img className="participant" src="/assets/participants/miami.svg" />
                    </div>
                    <div className="four wide column">
                      <img className="participant" src="/assets/participants/stanford.png" />
                    </div>

                    <div className="two wide column"></div>
                    <div className="four wide column">
                      <img className="participant" src="/assets/participants/pfizer.png" />
                    </div>
                    <div className="four wide column column-middle">
                      <img className="participant" src="/assets/participants/sickkids.png" />
                    </div>
                    <div className="four wide column">
                      <img className="participant" src="/assets/participants/rb.png" />
                    </div>
                    <div className="two wide column"></div>

                    <div className="four wide column">
                      <img className="participant" src="/assets/participants/ucsf.png" />
                    </div>
                    <div className="four wide column">
                      <img className="participant" src="/assets/participants/choc.png" />
                    </div>
                    <div className="four wide column">
                      <img className="participant" src="/assets/participants/miami.svg" />
                    </div>
                    <div className="four wide column">
                      <img className="participant" src="/assets/participants/stanford.png" />
                    </div>

                  </div>
          </div>
        </div>
      </div>
    );
  }
}
