import Layout from "../components/layout/layout";
import '../styles/globals.css'
import Head from "next/head";

function App({Component, pageProps}) {
    return (
        <Layout>
            <Head>
                <title>NextJs Events</title>
                <meta charSet="utf-8"/>
                <meta name="description" content="NextJs Events"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Component {...pageProps} />
        </Layout>
    )
}

export default App
