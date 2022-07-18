import React from "react";

const Footer = () => {
  return (
    <footer id="footer-main" className="footer-main container-fluid">
      {/* Container */}
      <div className="container">
        <div className="row">
          {/* Widget About */}
          <aside className="col-md-3 col-sm-6 col-xs-6 ftr-widget widget_about">
            <a href="index.html" title="Max Shop">
              Max <span>Shop</span>
            </a>
            <div className="info">
              <p>
                <i className="icon icon-Pointer" />
                Max Shop, 65 Huge Street Melbourne, 2850 Australia.
              </p>
              <p>
                <i className="icon icon-Phone2" />
                <a href="tel:(11)1234567890" title="Phone" className="phone">
                  (11) 123 456 7890
                </a>
              </p>
              <p>
                <i className="icon icon-Imbox" />
                <a href="mailto:info@maxshop.com" title="info@maxshop.com">
                  info@maxshop.com
                </a>
              </p>
            </div>
          </aside>
          {/* Widget About /- */}
          {/* Widget Links */}
          <aside className="col-md-3 col-sm-6 col-xs-6 ftr-widget widget_links">
            <h3 className="widget-title">Popular Links</h3>
            <ul>
              <li>
                <a href="#product-section" title="Popular Products">
                  Popular Products
                </a>
              </li>
              <li>
                <a href="#selling" title="Best Selling">
                  Best Selling
                </a>
              </li>
              <li>
                <a href="about.html" title="About Us">
                  About Us
                </a>
              </li>
              <li>
                <a href="#dealing" title="Deal Of The Day">
                  Deal Of The Day
                </a>
              </li>
              <li>
                <a href="#collection" title="Product Collections">
                  Product Collections
                </a>
              </li>
              <li>
                <a href="contact-us.html" title="Contact Us">
                  Contact Us
                </a>
              </li>
            </ul>
          </aside>
          {/* Widget Links /- */}
          {/* Widget Account */}
          <aside className="col-md-3 col-sm-6 col-xs-6 ftr-widget widget_links widget_account">
            <h3 className="widget-title">my account</h3>
            <ul>
              <li>
                <a href="#" title="My Order Details">
                  My Order Details
                </a>
              </li>
              <li>
                <a href="#" title="My credit Offers">
                  My credit Offers
                </a>
              </li>
              <li>
                <a href="#" title="My addresses">
                  My addresses
                </a>
              </li>
              <li>
                <a href="#" title="My Personal Details">
                  My Personal Details
                </a>
              </li>
              <li>
                <a href="#" title="My Account Details">
                  My Account Details
                </a>
              </li>
            </ul>
          </aside>
          {/* Widget Account /- */}
          {/* Widget Newsletter */}
          <aside className="col-md-3 col-sm-6 col-xs-6 ftr-widget widget_newsletter">
            <h3 className="widget-title">newsletter</h3>
            <div className="input-group">
              <input
                className="form-control"
                placeholder="email address"
                type="text"
              />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">
                  <i className="fa fa-paper-plane-o" />
                </button>
              </span>
            </div>
            <h5>Get New Updates From Our Collections</h5>
            <h3 className="widget-title widget-title-1">Follow Us</h3>
            <ul className="social">
              <li>
                <a href="#" title="Facebook">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#" title="Twitter">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#" title="Linkedin">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="#" title="Tumblr">
                  <i className="fa fa-tumblr" />
                </a>
              </li>
              <li>
                <a href="#" title="Vimeo">
                  <i className="fa fa-vimeo" />
                </a>
              </li>
            </ul>
          </aside>
          {/* Widget Newsletter /- */}
        </div>
        <div className="copyright-section">
          <div className="coyright-content">
            <p>© Max shop. all rights reserved</p>
          </div>
          <ul>
            <li>
              <a href="#" title="Delivery Information">
                Delivery Information
              </a>
            </li>
            <li>
              <a href="#" title="Privacy Policy">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" title="Terms & Condition">
                Terms &amp; Condition
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Container /- */}
    </footer>
  );
};

export default Footer;
