import { NextUIProvider } from '@nextui-org/react';
import Layout from '../shared/layout/Layout';

export default function App({ Component, pageProps }) {
  return <NextUIProvider>
    <Layout>
    <Component {...pageProps} />
    </Layout>
  </NextUIProvider>
}
