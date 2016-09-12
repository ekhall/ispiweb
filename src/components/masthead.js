import React, { Component } from 'react';

export default class Masthead extends Component {
  render() {
    return(
      <div className="homepage-header" id="homepage-header">
  			<div className="section-inner home-page-intro-wrapper">
  				<div className="home-page-intro">
  					<div className="home-page-intro-inner">
  						<h1>We Innovate For Children</h1>
  						<p>From first principles and through collaboration with colleagues worldwide, we seek to improve children's healthcare through innovative approaches, methods, and collaborations.</p>
  					</div>
  				</div>
  			</div>
        {/*
        <div className="logos">
          <div className="logo-1">Logo replaces boxes or something...</div>
          <div className="logo-2"></div>
          <div className="logo-3"></div>
          <div className="logo-4"></div>
        </div>
        */}

      </div>
    );
  }
}
