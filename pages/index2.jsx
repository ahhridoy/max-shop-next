import Head from "next/head";
import React from "react";

const Home2 = () => {
  return (
    <>
      <Head>
        <title>Home 2</title>
      </Head>
      
      <main>
        {/* Slider Section 1 */}
        <div
          id="home-revslider"
          className="slider-section slider-section-1 container-fluid no-padding"
        >
          {/* START REVOLUTION SLIDER 5.0 */}
          <div className="rev_slider_wrapper">
            <div id="home-slider2" className="rev_slider" data-version={5.0}>
              <ul>
                <li
                  data-transition="zoomout"
                  data-slotamount="default"
                  data-easein="easeInOut"
                  data-easeout="easeInOut"
                  data-masterspeed={2000}
                  data-rotate={0}
                  data-fstransition="fade"
                  data-fsmasterspeed={1500}
                  data-fsslotamount={7}
                >
                  <img
                    src="images/slider-2.jpg"
                    alt="slider"
                    data-bgposition="center center"
                    data-bgfit="cover"
                    data-bgrepeat="no-repeat"
                    data-bgparallax={10}
                    className="rev-slidebg"
                    data-no-retina=""
                  />
                  <div
                    className="tp-caption NotGeneric-Title tp-resizeme rs-parallaxlevel-0"
                    id="slide-layer-1"
                    data-x="['center','center','center','center']"
                    data-hoffset="['120','30','-80','-70']"
                    data-y="['top','top','top','top']"
                    data-voffset="['300','200','150','70']"
                    data-fontsize="['48','38','30','16']"
                    data-lineheight="['30','30','30','30']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;"
                    data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;"
                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                    data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                    data-start={1000}
                    data-splitin="chars"
                    data-splitout="none"
                    data-responsive_offset="on"
                    data-elementdelay="0.05"
                    style={{
                      zIndex: 5,
                      whiteSpace: "nowrap",
                      letterSpacing: "1.92px",
                      position: "relative",
                      color: "#333",
                      fontWeight: "normal",
                      fontFamily: '"Arizonia", cursive',
                    }}
                  >
                    trends of 2016
                  </div>
                  <div
                    className="tp-caption NotGeneric-Title tp-resizeme rs-parallaxlevel-0"
                    id="slide-layer-2"
                    data-x="['center','center','center','center']"
                    data-hoffset="['250','130','-10','-30']"
                    data-y="['top','top','top','top']"
                    data-voffset="['365','260','200','100']"
                    data-fontsize="['48','38','30','16']"
                    data-lineheight="['30','30','30','30']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;"
                    data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;"
                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                    data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                    data-start={1000}
                    data-splitin="chars"
                    data-splitout="none"
                    data-responsive_offset="on"
                    data-elementdelay="0.05"
                    style={{
                      zIndex: 5,
                      whiteSpace: "nowrap",
                      position: "relative",
                      color: "#b6795f",
                      fontWeight: "normal",
                      fontFamily: '"Montserrat", sans-serif',
                      textTransform: "uppercase",
                    }}
                  >
                    men's collections
                  </div>
                  <div
                    className="tp-caption NotGeneric-Title tp-resizeme rs-parallaxlevel-0"
                    id="slide-layer-3"
                    data-x="['center','center','center','center']"
                    data-hoffset="['270','200','100','125']"
                    data-y="['top','top','top','top']"
                    data-voffset="['425','315','245','135']"
                    data-fontsize="['18','18','18','16']"
                    data-lineheight="['27','27','27','27']"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;"
                    data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;"
                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                    data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                    data-start={1000}
                    data-splitin="chars"
                    data-splitout="none"
                    data-responsive_offset="on"
                    data-elementdelay="0.05"
                    style={{
                      zIndex: 5,
                      whiteSpace: "nowrap",
                      letterSpacing: "0.72px",
                      position: "relative",
                      color: "#333",
                      fontWeight: "normal",
                      fontFamily: '"Lato", sans-serif',
                    }}
                  >
                    The weather started getting rough is the tiny ship was
                    tossed. If not for
                    <br /> the courage of the fearless crew.
                  </div>
                  <div
                    className="tp-caption NotGeneric-Button rev-btn  rs-parallaxlevel-0"
                    id="slide-layer-4"
                    data-x="['middle','middle','center','center']"
                    data-hoffset="['85','15','-90','-10']"
                    data-y="['top','top','top','top']"
                    data-voffset="['515','410','335','220']"
                    data-fontsize="['14','14','13','12']"
                    data-lineheight="['24','24','24','24']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;"
                    data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:100;e:Power1.easeInOut;"
                    data-style_hover="c:rgb(255, 255, 255);bg:rgba(182, 121, 95);"
                    data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;"
                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                    data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                    data-start={2000}
                    data-splitin="none"
                    data-splitout="none"
                    data-actions='[{"event":"click","action":"scrollbelow","offset":"0px"}]'
                    data-responsive_offset="on"
                    data-responsive="off"
                    style={{
                      zIndex: 10,
                      padding: "8px 38px",
                      letterSpacing: "0.56px",
                      color: "#b6795f",
                      borderColor: "#b6795f",
                      fontFamily: '"Montserrat", sans-serif',
                      textTransform: "uppercase",
                      backgroundColor: "transparent",
                      whiteSpace: "nowrap",
                      outline: "none",
                      boxShadow: "none",
                      boxSizing: "border-box",
                      MozBoxSizing: "border-box",
                      WebkitBoxSizing: "border-box",
                    }}
                  >
                    Shop Now
                  </div>
                </li>
                <li
                  data-transition="zoomout"
                  data-slotamount="default"
                  data-easein="easeInOut"
                  data-easeout="easeInOut"
                  data-masterspeed={2000}
                  data-rotate={0}
                  data-fstransition="fade"
                  data-fsmasterspeed={1500}
                  data-fsslotamount={7}
                >
                  <img
                    src="images/slider-2.jpg"
                    alt="slider"
                    data-bgposition="center center"
                    data-bgfit="cover"
                    data-bgrepeat="no-repeat"
                    data-bgparallax={10}
                    className="rev-slidebg"
                    data-no-retina=""
                  />
                  <div
                    className="tp-caption NotGeneric-Title tp-resizeme rs-parallaxlevel-0"
                    id="slide-layer-5"
                    data-x="['center','center','center','center']"
                    data-hoffset="['120','30','-80','-70']"
                    data-y="['top','top','top','top']"
                    data-voffset="['300','200','150','70']"
                    data-fontsize="['48','38','30','16']"
                    data-lineheight="['30','30','30','30']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;"
                    data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;"
                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                    data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                    data-start={1000}
                    data-splitin="chars"
                    data-splitout="none"
                    data-responsive_offset="on"
                    data-elementdelay="0.05"
                    style={{
                      zIndex: 5,
                      whiteSpace: "nowrap",
                      letterSpacing: "1.92px",
                      position: "relative",
                      color: "#333",
                      fontWeight: "normal",
                      fontFamily: '"Arizonia", cursive',
                    }}
                  >
                    trends of 2016
                  </div>
                  <div
                    className="tp-caption NotGeneric-Title tp-resizeme rs-parallaxlevel-0"
                    id="slide-layer-6"
                    data-x="['center','center','center','center']"
                    data-hoffset="['250','130','-10','-30']"
                    data-y="['top','top','top','top']"
                    data-voffset="['365','260','200','100']"
                    data-fontsize="['48','38','30','16']"
                    data-lineheight="['30','30','30','30']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;"
                    data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;"
                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                    data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                    data-start={1000}
                    data-splitin="chars"
                    data-splitout="none"
                    data-responsive_offset="on"
                    data-elementdelay="0.05"
                    style={{
                      zIndex: 5,
                      whiteSpace: "nowrap",
                      position: "relative",
                      color: "#b6795f",
                      fontWeight: "normal",
                      fontFamily: '"Montserrat", sans-serif',
                      textTransform: "uppercase",
                    }}
                  >
                    men's collections
                  </div>
                  <div
                    className="tp-caption NotGeneric-Title tp-resizeme rs-parallaxlevel-0"
                    id="slide-layer-7"
                    data-x="['center','center','center','center']"
                    data-hoffset="['270','200','100','125']"
                    data-y="['top','top','top','top']"
                    data-voffset="['425','315','245','135']"
                    data-fontsize="['18','18','18','16']"
                    data-lineheight="['27','27','27','27']"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;"
                    data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;"
                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                    data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                    data-start={1000}
                    data-splitin="chars"
                    data-splitout="none"
                    data-responsive_offset="on"
                    data-elementdelay="0.05"
                    style={{
                      zIndex: 5,
                      whiteSpace: "nowrap",
                      letterSpacing: "0.72px",
                      position: "relative",
                      color: "#333",
                      fontWeight: "normal",
                      fontFamily: '"Lato", sans-serif',
                    }}
                  >
                    The weather started getting rough is the tiny ship was
                    tossed. If not for
                    <br /> the courage of the fearless crew.
                  </div>
                  <div
                    className="tp-caption NotGeneric-Button rev-btn  rs-parallaxlevel-0"
                    id="slide-layer-8"
                    data-x="['middle','middle','center','center']"
                    data-hoffset="['85','15','-90','-10']"
                    data-y="['top','top','top','top']"
                    data-voffset="['515','410','335','220']"
                    data-fontsize="['14','14','13','12']"
                    data-lineheight="['24','24','24','24']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;"
                    data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:100;e:Power1.easeInOut;"
                    data-style_hover="c:rgb(255, 255, 255);bg:rgba(182, 121, 95);"
                    data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;"
                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                    data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                    data-start={2000}
                    data-splitin="none"
                    data-splitout="none"
                    data-actions='[{"event":"click","action":"scrollbelow","offset":"0px"}]'
                    data-responsive_offset="on"
                    data-responsive="off"
                    style={{
                      zIndex: 10,
                      padding: "8px 38px",
                      letterSpacing: "0.56px",
                      color: "#b6795f",
                      borderColor: "#b6795f",
                      fontFamily: '"Montserrat", sans-serif',
                      textTransform: "uppercase",
                      backgroundColor: "transparent",
                      whiteSpace: "nowrap",
                      outline: "none",
                      boxShadow: "none",
                      boxSizing: "border-box",
                      MozBoxSizing: "border-box",
                      WebkitBoxSizing: "border-box",
                    }}
                  >
                    Shop Now
                  </div>
                </li>
              </ul>
            </div>
            {/* END REVOLUTION SLIDER */}
          </div>
          {/* END OF SLIDER WRAPPER */}
          <div className="goto-next">
            <a href="#collection">
              <i className="icon icon-Mouse bounce" />
            </a>
          </div>
        </div>
        {/* Slider Section 1 /- */}
        {/* Category Section1 */}
        <div className="category-section category-section1 container-fluid no-padding">
          {/* Container */}
          <div className="container">
            <div className="row">
              <div className="category-carousel1">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="category-box layout-1">
                    <img src="images/category-5.jpg" alt="category" />
                    <div className="category-content">
                      <p>shop the latest technologies</p>
                      <h5>save upto 40%</h5>
                      <a href="#" title="Shop Now">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12 category-images no-left-padding">
                  <div className="category-box layout-3">
                    <img src="images/category-6.jpg" alt="category" />
                    <div className="category-content">
                      <p>new homemade Products</p>
                      <h5>big offers On</h5>
                      <a href="#" title="Shop Now">
                        Shop Now
                      </a>
                    </div>
                  </div>
                  <div className="category-box layout-4">
                    <img src="images/category-7.jpg" alt="category" />
                    <div className="category-content">
                      <p>special offers for kids</p>
                      <h5>save upto 60%</h5>
                      <a href="#" title="Shop Now">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Row /- */}
          </div>
          {/* Container /- */}
        </div>
        {/* Category Section1 */}
        {/* Product Section1 */}
        <div
          id="product-section"
          className="product-section product-section1 container-fluid no-padding"
        >
          {/* Container */}
          <div className="container">
            {/* Row */}
            <div className="row">
              {/* Section Header */}
              <div className="section-header">
                <h3>Our Products</h3>
                <p>our vision is to be Earth's most customer centric company</p>
                <img src="images/section-seprator.png" alt="section-seprator" />
              </div>
              {/* Section Header /- */}
              <ul id="filters" className="products-categories no-left-padding">
                <li>
                  <a data-filter="*" className="active" href="#">
                    All Products
                  </a>
                </li>
                <li>
                  <a data-filter=".design" href="#">
                    jewellery
                  </a>
                </li>
                <li>
                  <a data-filter=".video" href="#">
                    books
                  </a>
                </li>
                <li>
                  <a data-filter=".photography" href="#">
                    watches
                  </a>
                </li>
                <li>
                  <a data-filter=".web" href="#">
                    shoes
                  </a>
                </li>
                <li>
                  <a data-filter=".design" href="#">
                    electronics
                  </a>
                </li>
                <li>
                  <a data-filter=".photography" href="#">
                    mobiles
                  </a>
                </li>
                <li>
                  <a data-filter=".video" href="#">
                    more
                    <i className="fa fa-angle-down" />
                  </a>
                </li>
              </ul>
              {/* Products */}
              <ul className="products">
                {/* Product */}
                <li className="product design">
                  <a href="#">
                    <img src="images/product-1.jpg" alt="Product" />
                    <h5>Stylish Chair</h5>
                    <span className="price">
                      <del>$200</del>$139
                    </span>
                  </a>
                  <a href="#" className="add-to-cart1" title="Add To Cart">
                    Add To Cart
                  </a>
                  <div className="wishlist-box">
                    <a href="#">
                      <i className="fa fa-arrows-alt" />
                    </a>
                    <a href="#">
                      <i className="fa fa-heart-o" />
                    </a>
                    <a href="#">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </li>
                {/* Product /- */}
                {/* Product */}
                <li className="product photography">
                  <a href="#">
                    <img src="images/product-2.jpg" alt="Product" />
                    <h5>men's casual shoes</h5>
                    <span className="price">
                      <del>$200</del>$119
                    </span>
                  </a>
                  <a href="#" className="add-to-cart1" title="Add To Cart">
                    Add To Cart
                  </a>
                  <div className="wishlist-box">
                    <a href="#">
                      <i className="fa fa-arrows-alt" />
                    </a>
                    <a href="#">
                      <i className="fa fa-heart-o" />
                    </a>
                    <a href="#">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </li>
                {/* Product /- */}
                {/* Product */}
                <li className="product video">
                  <a href="#">
                    <img src="images/product-3.jpg" alt="Product" />
                    <h5>sun glass</h5>
                    <span className="price">
                      <del>$150</del>$85
                    </span>
                  </a>
                  <a href="#" className="add-to-cart1" title="Add To Cart">
                    Add To Cart
                  </a>
                  <div className="wishlist-box">
                    <a href="#">
                      <i className="fa fa-arrows-alt" />
                    </a>
                    <a href="#">
                      <i className="fa fa-heart-o" />
                    </a>
                    <a href="#">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </li>
                {/* Product /- */}
                {/* Product */}
                <li className="product web">
                  <a href="#">
                    <img src="images/product-4.jpg" alt="Product" />
                    <h5>Stylish Chair</h5>
                    <span className="price">
                      <del>$380</del>$259
                    </span>
                  </a>
                  <a href="#" className="add-to-cart1" title="Add To Cart">
                    Add To Cart
                  </a>
                  <div className="wishlist-box">
                    <a href="#">
                      <i className="fa fa-arrows-alt" />
                    </a>
                    <a href="#">
                      <i className="fa fa-heart-o" />
                    </a>
                    <a href="#">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </li>
                {/* Product /- */}
                {/* Product */}
                <li className="product design">
                  <a href="#">
                    <img src="images/product-9.jpg" alt="Product" />
                    <h5>latest headphone</h5>
                    <span className="price">
                      <del>$900</del>$759
                    </span>
                  </a>
                  <a href="#" className="add-to-cart1" title="Add To Cart">
                    Add To Cart
                  </a>
                  <div className="wishlist-box">
                    <a href="#">
                      <i className="fa fa-arrows-alt" />
                    </a>
                    <a href="#">
                      <i className="fa fa-heart-o" />
                    </a>
                    <a href="#">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </li>
                {/* Product /- */}
                {/* Product */}
                <li className="product photography">
                  <a href="#">
                    <img src="images/product-6.jpg" alt="Product" />
                    <h5>men's jackets</h5>
                    <span className="price">
                      <del>$350</del>$249
                    </span>
                  </a>
                  <a href="#" className="add-to-cart1" title="Add To Cart">
                    Add To Cart
                  </a>
                  <div className="wishlist-box">
                    <a href="#">
                      <i className="fa fa-arrows-alt" />
                    </a>
                    <a href="#">
                      <i className="fa fa-heart-o" />
                    </a>
                    <a href="#">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </li>
                {/* Product /- */}
                {/* Product */}
                <li className="product web">
                  <a href="#">
                    <img src="images/product-7.jpg" alt="Product" />
                    <h5>Model x12 computer</h5>
                    <span className="price">
                      <del>$255</del>$139
                    </span>
                  </a>
                  <a href="#" className="add-to-cart1" title="Add To Cart">
                    Add To Cart
                  </a>
                  <div className="wishlist-box">
                    <a href="#">
                      <i className="fa fa-arrows-alt" />
                    </a>
                    <a href="#">
                      <i className="fa fa-heart-o" />
                    </a>
                    <a href="#">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </li>
                {/* Product /- */}
                {/* Product */}
                <li className="product design">
                  <a href="#">
                    <img src="images/product-8.jpg" alt="Product" />
                    <h5>Stylish headset</h5>
                    <span className="price">
                      <del>$85</del>$39
                    </span>
                  </a>
                  <a href="#" className="add-to-cart1" title="Add To Cart">
                    Add To Cart
                  </a>
                  <div className="wishlist-box">
                    <a href="#">
                      <i className="fa fa-arrows-alt" />
                    </a>
                    <a href="#">
                      <i className="fa fa-heart-o" />
                    </a>
                    <a href="#">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </li>
                {/* Product /- */}
              </ul>
              {/* Products /- */}
            </div>
            {/* Row /- */}
            <nav className="ow-pagination">
              <ul className="pager">
                <li className="number">
                  <a href="#">4</a>
                </li>
                <li className="load-more">
                  <a href="#">Load More</a>
                </li>
                <li className="previous">
                  <a href="#">
                    <i className="fa fa-angle-right" />
                  </a>
                </li>
                <li className="next">
                  <a href="#">
                    <i className="fa fa-angle-left" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* Container /- */}
        </div>
        {/* Product Section1 /- */}
        {/* Collection Section */}
        <div
          id="collection"
          className="collection-section container-fluid no-padding"
        >
          <div className="col-md-6 col-sm-6 col-xs-12 no-padding">
            <div className="img-box">
              <img src="images/collection-1.jpg" alt="collection" />
            </div>
            <div className="collection-content">
              <h5>mens collectios</h5>
              <p>new looks arrivad</p>
              <a href="#" title="Shop Now">
                shop Now
              </a>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 no-padding">
            <div className="img-box">
              <img src="images/collection-2.jpg" alt="collection" />
            </div>
            <div className="collection-content">
              <h5>kids collectios</h5>
              <p>new looks arrivad</p>
              <a href="#" title="Shop Now">
                shop Now
              </a>
            </div>
          </div>
        </div>
        {/* Collection Section /- */}
        {/* Dealing Section */}
        <div id="deal" className="dealing-section container-fluid no-padding">
          {/* Container */}
          <div className="container">
            {/* Section Header */}
            <div className="section-header">
              <h3>Deals Of The Day</h3>
              <p>our vision is to be Earth's most customer centric company</p>
              <img src="images/section-seprator.png" alt="section-seprator" />
            </div>
            {/* Section Header /- */}
          </div>
          {/* Container /- */}
          <div className="col-md-3 col-sm-12 col-xs-12">
            <div className="dealing-img">
              <a href="#">
                <img src="images/deal-1.png" alt="deal" />
                <h5>mens casual shoes</h5>
                <span className="price">
                  <del>$650</del>$459
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-6 saleup-img">
            <div data-date="2017/04/04" id="clock-1" className="clock" />
            <h5>mens casual shoes</h5>
            <p>
              The weather started getting rough the tossed. If not for the
              courage of the fearless crew the Minnow would be lost. would be
              lost.{" "}
            </p>
            <a href="#" title="Shop Now" className="shop-now">
              Shop Now
            </a>
          </div>
          <div className="col-md-3 col-sm-12 col-xs-12">
            <div className="dealing-img dealing-img2">
              <a href="#">
                <img src="images/deal-2.png" alt="deal" />
                <h5>mens casual shoes</h5>
                <span className="price">
                  <del>$850</del>$559
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* Dealing Section /- */}
        {/* Testimonial Section */}
        <div className="testimonial-section container-fluid">
          {/* Container */}
          <div className="container">
            {/* Section Header */}
            <div className="section-header">
              <h3>Happy Clients Says</h3>
              <p> our vision is to be Earth's most customer centric company</p>
              <img src="images/section-seprator.png" alt="section-seprator" />
            </div>
            {/* Section Header /- */}
            {/* Main Carousel */}
            <div
              id="main-carousel1"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#main-carousel1"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#main-carousel1" data-slide-to={1} />
                <li data-target="#main-carousel1" data-slide-to={2} />
              </ol>
              <div role="listbox" className="carousel-inner">
                <div className="item active">
                  <div className="testimonial-content">
                    <i className="fa fa-quote-left" aria-hidden="true" />
                    <p>
                      The final frontier. These are the voyages of the Starship
                      Enterprise? As long as we live its you and me baby. There
                      ain't nothin' Beats all you've ever saw been in trouble
                      with the law since the day.{" "}
                    </p>
                    <img src="images/testi.jpg" alt="testi" />
                    <span className="star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                    </span>
                    <h3>Strahow stuart</h3>
                    <h5>Web Designer</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <i className="fa fa-quote-left" aria-hidden="true" />
                    <p>
                      The final frontier. These are the voyages of the Starship
                      Enterprise? As long as we live its you and me baby. There
                      ain't nothin' Beats all you've ever saw been in trouble
                      with the law since the day.{" "}
                    </p>
                    <img src="images/testi.jpg" alt="testi" />
                    <span className="star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                    </span>
                    <h3>Strahow stuart</h3>
                    <h5>Web Designer</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <i className="fa fa-quote-left" aria-hidden="true" />
                    <p>
                      The final frontier. These are the voyages of the Starship
                      Enterprise? As long as we live its you and me baby. There
                      ain't nothin' Beats all you've ever saw been in trouble
                      with the law since the day.{" "}
                    </p>
                    <img src="images/testi.jpg" alt="testi" />
                    <span className="star">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                    </span>
                    <h3>Strahow stuart</h3>
                    <h5>Web Designer</h5>
                  </div>
                </div>
              </div>
            </div>
            {/* Main Carousel /-  */}
          </div>
          {/* Container /- */}
        </div>
        {/* Testimonial Section /- */}
        {/* Latest Blog */}
        <div className="blog-section latest-blog1 container-fluid">
          {/* Container */}
          <div className="container">
            {/* Section Header */}
            <div className="section-header">
              <h3>Latest News</h3>
              <p>our vision is to be Earth's most customer centric company</p>
              <img src="images/section-seprator.png" alt="section-seprator" />
            </div>
            {/* Section Header /- */}
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="col-md-8 col-sm-6 col-xs-6">
                <div className="type-post">
                  <div className="col-md-5 col-sm-12 col-xs-12 no-padding entry-cover">
                    <a href="blog-post.html">
                      <img src="images/blog-1.jpg" alt="blog" />
                    </a>
                    <span className="post-date">
                      <a href="#">
                        <i className="fa fa-calendar-o" />
                        July 20
                      </a>
                    </span>
                  </div>
                  <div className="col-md-7 col-sm-12 col-xs-12 blog-content">
                    <h3 className="entry-title">
                      <a
                        title="new Collectios are imported In Our shop."
                        href="blog-post.html"
                      >
                        new Collectios are <span>imported</span> In Our shop.
                      </a>
                    </h3>
                    <div className="entry-meta">
                      <span className="post-like">
                        <a href="#" title="224 Likes">
                          <i className="fa fa-heart-o" />
                          224 Likes
                        </a>
                      </span>
                      <span className="post-admin">
                        <i className="fa fa-user" />
                        Posted By
                        <a href="#" title="Max">
                          Max
                        </a>
                      </span>
                    </div>
                    <div className="entry-content">
                      <p>
                        The weather started getting rough - the tiny ship was
                        tossed. If not for the courage of the fearless If not
                        for the courage of the Minnow would be lost.
                      </p>
                      <a
                        href="blog-post.html"
                        title="Read More"
                        className="read-more"
                      >
                        Read More
                        <i className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-6">
                <div className="type-post">
                  <div className="entry-cover">
                    <a href="blog-post.html">
                      <img src="images/blog-3.jpg" alt="blog" />
                    </a>
                    <span className="post-date">
                      <a href="#">
                        <i className="fa fa-calendar-o" />
                        March 30
                      </a>
                    </span>
                    <span className="look">
                      <i className="icon icon-Eye" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="col-md-4 col-sm-6 col-xs-6">
                <div className="type-post">
                  <div className="entry-cover">
                    <a href="blog-post.html">
                      <img src="images/blog-4.jpg" alt="blog" />
                    </a>
                    <span className="post-date">
                      <a href="#">
                        <i className="fa fa-calendar-o" />
                        May 17
                      </a>
                    </span>
                    <span className="look">
                      <i className="icon icon-Eye" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-sm-6 col-xs-6">
                <div className="type-post">
                  <div className="col-md-7 col-sm-12 col-xs-12 blog-content">
                    <h3 className="entry-title">
                      <a
                        title="new Collectios are imported In Our shop."
                        href="blog-post.html"
                      >
                        Our shop visitor's <span>imported</span> new look
                      </a>
                    </h3>
                    <div className="entry-meta">
                      <span className="post-like">
                        <a href="#" title="224 Likes">
                          <i className="fa fa-heart-o" />
                          224 Likes
                        </a>
                      </span>
                      <span className="post-admin">
                        <i className="fa fa-user" />
                        Posted By
                        <a href="#" title="Max">
                          Max
                        </a>
                      </span>
                    </div>
                    <div className="entry-content">
                      <p>
                        The weather started getting rough - the tiny ship was
                        tossed. If not for the courage of the fearless If not
                        for the courage of the Minnow would be lost.
                      </p>
                      <a
                        href="blog-post.html"
                        title="Read More"
                        className="read-more"
                      >
                        Read More
                        <i className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12 col-xs-12 no-padding entry-cover">
                    <a href="blog-post.html">
                      <img src="images/blog-2.jpg" alt="blog" />
                    </a>
                    <span className="post-date">
                      <a href="#">
                        <i className="fa fa-calendar-o" />
                        June 26
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Container /- */}
        </div>
        {/* Latest Blog /- */}
        {/* Selling1 */}
        <div
          id="selling"
          className="container-fluid no-padding woocommerce-selling woocommerce-selling1"
        >
          <div className="col-md-6 col-sm-6 col-xs-6 selling-detail">
            {/* Section Header */}
            <div className="section-header">
              <h3>Best Selling Accessories</h3>
              <p> our vision is to be Earth's most customer centric company</p>
              <img src="images/section-seprator.png" alt="section-seprator" />
            </div>
            {/* Section Header /- */}
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="selling-box">
                <img src="images/selling-1.jpg" alt="selling" />
                <div className="selling-content">
                  <h6>
                    <a href="#">mens casual belts</a>
                  </h6>
                  <span className="price">
                    <del>$75</del> $49
                  </span>
                  <div className="star-rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="icon-list">
                  <a href="#">
                    <i className="fa fa-arrows-alt" />
                  </a>
                  <a href="#">
                    <i className="fa fa-heart-o" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="selling-box">
                <img src="images/selling-2.jpg" alt="selling" />
                <div className="selling-content">
                  <h6>
                    <a href="#">attractive chains</a>
                  </h6>
                  <span className="price">
                    <del>$220</del> $149
                  </span>
                  <div className="star-rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="icon-list">
                  <a href="#">
                    <i className="fa fa-arrows-alt" />
                  </a>
                  <a href="#">
                    <i className="fa fa-heart-o" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="selling-box">
                <img src="images/selling-4.jpg" alt="selling" />
                <div className="selling-content">
                  <h6>
                    <a href="#">casual shirts</a>
                  </h6>
                  <span className="price">
                    <del>$240</del> $179
                  </span>
                  <div className="star-rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="icon-list">
                  <a href="#">
                    <i className="fa fa-arrows-alt" />
                  </a>
                  <a href="#">
                    <i className="fa fa-heart-o" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="selling-box">
                <img src="images/selling-5.jpg" alt="selling" />
                <div className="selling-content">
                  <h6>
                    <a href="#">ladies wallets</a>
                  </h6>
                  <span className="price">
                    <del>$120</del> $79
                  </span>
                  <div className="star-rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="icon-list">
                  <a href="#">
                    <i className="fa fa-arrows-alt" />
                  </a>
                  <a href="#">
                    <i className="fa fa-heart-o" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="selling-box">
                <img src="images/selling-2.jpg" alt="selling" />
                <div className="selling-content">
                  <h6>
                    <a href="#">attractive chains</a>
                  </h6>
                  <span className="price">
                    <del>$220</del> $149
                  </span>
                  <div className="star-rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="icon-list">
                  <a href="#">
                    <i className="fa fa-arrows-alt" />
                  </a>
                  <a href="#">
                    <i className="fa fa-heart-o" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="selling-box">
                <img src="images/selling-6.jpg" alt="selling" />
                <div className="selling-content">
                  <h6>
                    <a href="#">huvai chappals</a>
                  </h6>
                  <span className="price">
                    <del>$850</del> $550
                  </span>
                  <div className="star-rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="icon-list">
                  <a href="#">
                    <i className="fa fa-arrows-alt" />
                  </a>
                  <a href="#">
                    <i className="fa fa-heart-o" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-sm-6 col-xs-6 selling-img"
            data-image="images/selling-bg.jpg"
          />
        </div>
        {/* Selling1 */}
        {/* Clients 1 */}
        <div className="clients clients-1 container-fluid">
          {/* Container */}
          <div className="container">
            <div className="clients-carousel">
              <div className="col-md-12 item">
                <a href="#" title="client">
                  <img src="images/client-1.png" alt="client-1" />
                </a>
              </div>
              <div className="col-md-12 item">
                <a href="#" title="client">
                  <img src="images/client-2.png" alt="client-2" />
                </a>
              </div>
              <div className="col-md-12 item">
                <a href="#" title="client">
                  <img src="images/client-3.png" alt="client-3" />
                </a>
              </div>
              <div className="col-md-12 item">
                <a href="#" title="client">
                  <img src="images/client-4.png" alt="client-4" />
                </a>
              </div>
              <div className="col-md-12 item">
                <a href="#" title="client">
                  <img src="images/client-5.png" alt="client-5" />
                </a>
              </div>
              <div className="col-md-12 item">
                <a href="#" title="client">
                  <img src="images/client-1.png" alt="client-1" />
                </a>
              </div>
              <div className="col-md-12 item">
                <a href="#" title="client">
                  <img src="images/client-2.png" alt="client-2" />
                </a>
              </div>
              <div className="col-md-12 item">
                <a href="#" title="client">
                  <img src="images/client-3.png" alt="client-3" />
                </a>
              </div>
              <div className="col-md-12 item">
                <a href="#" title="client">
                  <img src="images/client-4.png" alt="client-4" />
                </a>
              </div>
              <div className="col-md-12 item">
                <a href="#" title="client">
                  <img src="images/client-5.png" alt="client-5" />
                </a>
              </div>
            </div>
          </div>
          {/* Container /- */}
        </div>
        {/* Clients 1 /- */}
      </main>
    </>
  );
};

export default Home2;
