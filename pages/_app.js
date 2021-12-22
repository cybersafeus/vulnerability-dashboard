import { useState } from 'react'
import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'
import Router from "next/router"
import Loader from '../components/Loader'
import PrivateLayout from '../components/PrivateLayout'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', url => {
    setLoading(true)
  })
  Router.events.on('routeChangeComplete', url => {
    setLoading(false);
  })
  Router.events.on('routeChangeError', url => {
    setLoading(false);
  })
  return (
    <>
    {loading ? <Loader Wrapper={PrivateLayout}/> :  <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>}
    </>
  )
}

export default MyApp
