import React from 'react';
import PropTypes from 'prop-types';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

class MyDocument extends Document {
  render() {
    const { pageContext } = this.props;

    return (
      <html lang="en" dir="ltr">
        <Head>
          <title>Occertimm</title>
          <meta charSet="utf-8" />
					<meta
						name="google-site-verification"
						content="yd6UMciEuSI7y2rhhtwwXRIVPmXjIM1PzjLIL98MCZI"
					/>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />

					 <meta name="Description" content="Operadora de capacitacion y certificacion por competencia laboral occertimm" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />

					<link href="https://fonts.googleapis.com/css?family=Poppins:400,600" rel="stylesheet" />
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/icon?family=Material+Icons"
					/>
					<link
						rel="stylesheet"
						href="/static/icon.css"
					/>

					<link rel="apple-touch-icon" sizes="57x57" href="/static/favicons/apple-icon-57x57.png" />
					<link rel="apple-touch-icon" sizes="60x60" href="/static/favicons/apple-icon-60x60.png" />
					<link rel="apple-touch-icon" sizes="72x72" href="/static/favicons/apple-icon-72x72.png" />
					<link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-icon-76x76.png" />
					<link rel="apple-touch-icon" sizes="114x114" href="/static/favicons/apple-icon-114x114.png" />
					<link rel="apple-touch-icon" sizes="120x120" href="/static/favicons/apple-icon-120x120.png" />
					<link rel="apple-touch-icon" sizes="144x144" href="/static/favicons/apple-icon-144x144.png" />
					<link rel="apple-touch-icon" sizes="152x152" href="/static/favicons/apple-icon-152x152.png" />
					<link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-icon-180x180.png" />
					<link rel="icon" type="image/png" sizes="192x192"  href="/static/favicons/android-icon-192x192.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="96x96" href="/static/favicons/favicon-96x96.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
					<link rel="manifest" href="/static/favicons/manifest.json" />
					<meta name="msapplication-TileImage" content="/static/favicons/ms-icon-144x144.png" />
					<meta name="msapplication-TileColor" content="#0f4377" />
					<meta name="theme-color" content="#0f4377" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  let pageContext;
  const page = ctx.renderPage(Component => {
    const WrappedComponent = props => {
      pageContext = props.pageContext;
      return <Component {...props} />;
    };

    WrappedComponent.propTypes = {
      pageContext: PropTypes.object.isRequired,
    };

    return WrappedComponent;
  });

  return {
    ...page,
    pageContext,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        <style
          id="jss-server-side"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
        />
        {flush() || null}
      </React.Fragment>
    ),
  };
};

export default MyDocument;
