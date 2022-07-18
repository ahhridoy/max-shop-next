/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="" />
          <meta name="author" content="" />
          <title>Maxshop - Home1</title>
          {/* Standard Favicon */}
          <link rel="icon" type="image/x-icon" href="images//favicon.ico" />
          {/* For iPhone 4 Retina display: */}
          <link
            rel="apple-touch-icon-precomposed"
            href="images//apple-touch-icon-114x114-precomposed.png"
          />
          {/* For iPad: */}
          <link
            rel="apple-touch-icon-precomposed"
            href="images//apple-touch-icon-72x72-precomposed.png"
          />
          {/* For iPhone: */}
          <link
            rel="apple-touch-icon-precomposed"
            href="images//apple-touch-icon-57x57-precomposed.png"
          />
          {/* Library - Google Font Familys */}
          <link
            href="https://fonts.googleapis.com/css?family=Arizonia|Crimson+Text:400,400i,600,600i,700,700i|Lato:100,100i,300,300i,400,400i,700,700i,900,900i|Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="revolution/css/settings.css"
          />
          {/* RS5.0 Layers and Navigation Styles */}
          <link
            rel="stylesheet"
            type="text/css"
            href="revolution/css/layers.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="revolution/css/navigation.css"
          />
          {/* Library - Bootstrap v3.3.5 */}
          <link rel="stylesheet" type="text/css" href="libraries/lib.css" />
          {/* Custom - Common CSS */}
          <link rel="stylesheet" type="text/css" href="css/plugins.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="css/navigation-menu.css"
          />
          <link rel="stylesheet" type="text/css" href="css/shortcode.css" />
          <link rel="stylesheet" type="text/css" href="style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* <!-- JQuery v1.12.4 --> */}
          <script src="js/jquery.min.js"></script>

          {/* <!-- Library - Js --> */}
          <script src="libraries/lib.js"></script>

          <script src="libraries/jquery.countdown.min.js"></script>

          {/* <!-- RS5.0 Core JS Files --> */}
          <script
            type="text/javascript"
            src="revolution/js/jquery.themepunch.tools.min.js?rev=5.0"
          ></script>
          <script
            type="text/javascript"
            src="revolution/js/jquery.themepunch.revolution.min.js?rev=5.0"
          ></script>
          <script
            type="text/javascript"
            src="revolution/js/extensions/revolution.extension.video.min.js"
          ></script>
          <script
            type="text/javascript"
            src="revolution/js/extensions/revolution.extension.slideanims.min.js"
          ></script>
          <script
            type="text/javascript"
            src="revolution/js/extensions/revolution.extension.layeranimation.min.js"
          ></script>
          <script
            type="text/javascript"
            src="revolution/js/extensions/revolution.extension.navigation.min.js"
          ></script>
          <script
            type="text/javascript"
            src="revolution/js/extensions/revolution.extension.actions.min.js"
          ></script>

          {/* <!-- Library - Theme JS --> */}
          <script src="js/functions.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
