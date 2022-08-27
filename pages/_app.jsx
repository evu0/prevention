import Layout from '../comps/Layout'
import '../styles/globals.css'
import {motion} from 'framer-motion'
import Head from 'next/head'
import Router from 'next/router'

function MyApp({ Component, pageProps, router }) {


  return(
    <>

    <Head>
      {/* <title>{router.pathname.replace('/', '')}</title> */}
      <title>فحوصاتي</title>
    </Head>

    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        key={router.route}
      className="motion">

        <Component {...pageProps} />
        
      </motion.div>
    </Layout>
    
    </>
    )
}

export default MyApp
