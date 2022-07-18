import Head from "next/head";
import React from "react";

const Custom404 = () => {
  return (
    <>
    <Head>
      <title>Page Not Found</title>
    </Head>
    <main>
      {/* Page Banner */}
      <div className="page-banner container-fluid no-padding">
        {/* Container */}
        <div className="container">
          <div className="banner-content">
            <h3>404</h3>
            <p>our vision is to be Earth's most customer centric company</p>
          </div>
          <ol className="breadcrumb">
            <li>
              <a href="index.html" title="Home">
                Home
              </a>
            </li>
            <li className="active">Error</li>
          </ol>
        </div>
        {/* Container /- */}
      </div>
      {/* Page Banner /- */}
      {/* Error Page */}
      <div className="error-page container-fluid">
        {/* Container */}
        <div className="container">
          <div className="error-code">
            <span>
              4<img src="images/404.png" alt={404} />4
            </span>
          </div>
          <div className="error-content">
            <p>
              <span>Oops!</span> Page not found
            </p>
            <a href="#" title="Back to home">
              Back to home
            </a>
          </div>
        </div>
        {/* Container /- */}
      </div>
      {/* Error Page /- */}
    </main>
    </>
  );
};

export default Custom404;
