import { useState } from 'react';
import Layout from '../components/Layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
      setOpen(open = !open);
  }

  return (
    <Layout open={open} toggleMenu={toggleMenu}>
      <style jsx global>
        {`
          body{ overflow: ${open ? 'hidden' : ''} }
        `}
      </style>
      <Component {...pageProps} open={open} toggleMenu={toggleMenu}/>
    </Layout>
  )
}

export default MyApp
