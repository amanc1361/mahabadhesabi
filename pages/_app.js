import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
 
  return <>
   <Head >
     
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css" integrity="sha384-gXt9imSW0VcJVHezoNQsP+TNrjYXoGcrqBZJpry9zJt8PCQjobwmhMGaDHTASo9N" crossOrigin="anonymous"/>
    
  </Head>
  <Component {...pageProps} />
  </>

}

export default MyApp
