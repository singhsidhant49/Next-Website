import React from 'react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      <title>Shero Incorp - Leading Website and Software Development Company</title>
      <meta name="description" content="Shero Incorp is a leading website and software development company that offers custom solutions for businesses of all sizes. Contact us today to learn more." />
    </Head>
    <DefaultSeo
      title="Shero Incorp - Leading Website and Software Development Company"
      description="Shero Incorp is a leading website and software development company that offers custom solutions for businesses of all sizes. Contact us today to learn more."
      canonical="https://www.sheroincorp.com"
      openGraph={{
        type: 'website',
        locale: 'en_US',
        url: 'https://www.sheroincorp.com',
        site_name: 'Shero Incorp',
        title: 'Shero Incorp - Leading Website and Software Development Company',
        description: 'Shero Incorp is a leading website and software development company that offers custom solutions for businesses of all sizes. Contact us today to learn more.',
        images: [
          {
            url: 'https://www.sheroincorp.com/og-image.png',
            width: 1200,
            height: 630,
            alt: 'Shero Incorp - Leading Website and Software Development Company',
          },
        ],
      }}
    />
    <Component {...pageProps} />
  </>
);

export default MyApp;
