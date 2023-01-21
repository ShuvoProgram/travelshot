import Head from 'next/head';
import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>TravelGuru</title>
                <meta name="description" content="travel guru" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            {children}
            <Footer/>
        </>
    );
};

export default Layout;