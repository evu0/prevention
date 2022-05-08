import Layout from '../comps/Layout'
import '../styles/globals.css'
import {motion} from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return(
    <>
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
