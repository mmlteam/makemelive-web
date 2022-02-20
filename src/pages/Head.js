import React from "react";
import { Helmet } from "react-helmet";

const Head = props => {
  return (
    <Helmet>
      <title>{props.title}</title>

      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        to={`${process.env.PUBLIC_URL}/favicons/apple-icon-57x57.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        to={`${process.env.PUBLIC_URL}/favicons/apple-icon-60x60.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        to={`${process.env.PUBLIC_URL}/favicons/apple-icon-72x72.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        to={`${process.env.PUBLIC_URL}/favicons/apple-icon-76x76.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        to={`${process.env.PUBLIC_URL}/favicons/apple-icon-114x114.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        to={`${process.env.PUBLIC_URL}/favicons/apple-icon-120x120.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        to={`${process.env.PUBLIC_URL}/favicons/apple-icon-144x144.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        to={`${process.env.PUBLIC_URL}/favicons/apple-icon-152x152.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        to={`${process.env.PUBLIC_URL}/favicons/apple-icon-180x180.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        to={`${process.env.PUBLIC_URL}/favicons/android-icon-192x192.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        to={`${process.env.PUBLIC_URL}/favicons/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        to={`${process.env.PUBLIC_URL}/favicons/favicon-96x96.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        to={`${process.env.PUBLIC_URL}/favicons/favicon-16x16.png`}
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content={`${process.env.PUBLIC_URL}/favicons//ms-icon-144x144.png`}
      />
      <meta name="theme-color" content="#ffffff"></meta>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywordslist} />
      <meta name="og:title" content={props.title} />
      <meta name="og:description" content={props.ogdescription} />
      <meta name="og:type" content={props.type} />
      <meta name="og:url" content={props.url} />
      <meta name="og:site_name" content={props.site_name} />

      <link
        rel="shortcut icon"
        to={`${process.env.PUBLIC_URL}/favicons/favicon.ico?v1`}
      />
      <link rel="manifest" to={`${process.env.PUBLIC_URL}/manifest.json`} />
    </Helmet>
  );
};

export default Head;
