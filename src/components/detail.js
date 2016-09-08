import React, { Component } from 'react';

export default class Detail extends Component {
  render() {
    return(
      <div className="ui vertical stripe segment">
          <div className="ui text container">
            <h1 className="ui header headline">News and Updates</h1>
            <h3 className="ui header headline">Improving Healthcare for Children</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <a className="ui large button">Read More</a>
            <h4 className="ui horizontal header divider">
              <a href="#">September 20, 2016</a>
            </h4>
            <h3 className="ui header">Did We Tell You About Our Bananas?</h3>
            <p>Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but its really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.</p>
            <a className="ui large button">I'm Still Quite Interested</a>
          </div>
        </div>
    );
  }
}
