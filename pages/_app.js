import Layout from "../components/layout/layout";
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
