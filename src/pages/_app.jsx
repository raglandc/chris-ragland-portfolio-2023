import { useRef } from 'react'
import Header from '@/config'
import Layout from '@/components/dom/Layout'
import '@/styles/index.css'

export default function App({ Component, pageProps = { title: 'Chris Ragland' } }) {
  const ref = useRef()
  return (
    <>
      <Header title={pageProps.title} />
      <Layout ref={ref}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
