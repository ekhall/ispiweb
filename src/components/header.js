import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return(
      <header id="site-header">
    		<div>
    			<a className="marque" href="/">
            <a className="https://twitter.com/iSPI" className="ion-ios-flower"></a>
    			</a>
    			<ul className="social-icons header-social-icons">
            <li><a className="https://www.facebook.com/iSPI" className="ion-social-facebook"></a></li>
    				<li><a className="https://twitter.com/iSPI" className="ion-social-twitter"></a></li>
    				<li><a className="http://instagram.com/iSPI" className="ion-social-instagram"></a></li>
    			</ul>
    			<nav>
    				<a className="work fade-transition " href="/work">News</a>
    				<a className="us fade-transition " href="/us">Us</a>
    				<a className="journal fade-transition" href="http://ispikids.org/">Blog</a>
    				<a className="contact fade-transition " href="/contact">Contact</a>
    			</nav>
    		</div>
    	</header>
    );
  }
}
