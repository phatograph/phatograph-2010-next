import React from 'react'
// import className from 'classnames'
import Head from 'next/head'
// import {useRouter} from 'next/router'
import smoothscroll from 'smoothscroll-polyfill'
// import Link from 'next/link'
import {AppProps} from 'next/app'

// import {t} from '@lib/helpers'

// import Header from '@components/Header'

import '../css/app.scss'

const MyApp = ({Component, pageProps}: AppProps) => {
  React.useEffect(() => {
    smoothscroll.polyfill()
  }, [])

  const title = 'Pat Wangrungarun'
  const description =
    'Front-end developer · React · Redux · Rails · Next.js · Node.js'

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />

        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
          // content='width=1300, viewport-fit=cover'
        />

        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content='/images/og.jpg' />

        <link rel='icon' type='image/png' href='/images/pat.jpg' />
      </Head>

      <Component
        {...{
          ...pageProps,
        }}
      />
    </React.Fragment>
  )
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
