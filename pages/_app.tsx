import Layout from '@components/Layout/Layout'
import {AppProps} from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  // Aqui es donde usariamos Providers - Context/Providers, Theme, data
  //Layout 
  //para pasar props adicionales

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
  //Nextjs engloba este componente "Component" que se trata de todas las paginas de nuestra aplicacion 
  //en el componente MyApp
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp