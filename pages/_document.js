import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta content="Learn NEXT Js" property="custom" />
                </Head>
                <body className="antialiased font-sans">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument