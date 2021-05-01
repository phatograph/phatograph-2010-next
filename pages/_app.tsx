import React from 'react'
import className from 'classnames'
import Head from 'next/head'
import kebabCase from 'lodash/kebabCase'
import {useRouter} from 'next/router'
import smoothscroll from 'smoothscroll-polyfill'
import Link from 'next/link'
import {AppProps} from 'next/app'

// import {t} from '@lib/helpers'

// import Header from '@components/Header'

import '../css/app.scss'

const MyApp = ({Component, pageProps}: AppProps) => {
  React.useEffect(() => {
    smoothscroll.polyfill()
  }, [])

  const title = 'Pat Wangrungarun'
  const description = 'phatograph-2010 recreated in Next.js'

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
        <meta property='og:image' content='/images/og.png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />

        <link rel='icon' type='image/png' href='/images/pat.png' />
      </Head>

      <div className='container'>
        <div className='wrapper'>
          <div className='clearfix'>
            <div className='siteinfo'>
              <a href=''>
                <h1>Phatograph.com</h1>
              </a>

              <div className='content'>
                <Component
                  {...{
                    ...pageProps,
                  }}
                />
              </div>
            </div>

            <div className='menu'>
              {(() => {
                const data = [
                  {
                    a: 'Home',
                    info: 'phatograph.com',
                    href: '/',
                  },
                  {
                    a: 'Portfolio',
                    info: 'recent works',
                    submenu: [
                      {
                        li: 'CSCU Open House 2007',
                      },
                      {
                        li: 'CSCU MS Plan Newspaner Ads.',
                      },
                      {
                        li: 'CSCU 2301350 Notebook UI Design',
                      },
                      {
                        li: 'Workpoint Studio Plate for ASA Competition',
                      },
                      {
                        li: 'CSCU #13 Yearbook',
                      },
                      {
                        li: 'Sakchai Solution Site design',
                      },
                    ],
                  },
                  {
                    a: 'About',
                    info: 'phatography!',
                    href: '/about',
                  },
                  {
                    a: 'Contact',
                    info: 'want any site?',
                    href: '/contact',
                  },
                ]

                return (
                  <div className='clearfix'>
                    {data.map((x, i) => (
                      <MenuBox key={i} x={x} />
                    ))}
                  </div>
                )
              })()}

              <span className='clearall'></span>
            </div>
          </div>

          <span className='clearall'></span>
        </div>

        <div className='footer'>
          <div className='content'>
            Copyright &copy; 2010 Phatograph Project
          </div>

          {false && (
            <div className='subs'>powered by CodeIgniter and Doctrine.</div>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp

const MenuBox = ({x}) => {
  const router = useRouter()
  const [__isActive, __isActiveSet] = React.useState(
    Boolean(router?.pathname?.match(/\/portfolios\//))
  )

  return (
    <div className='menubox'>
      {x?.href ? (
        <Link href={x?.href}>
          <a>{x?.a}</a>
        </Link>
      ) : (
        <a
          onClick={() => {
            __isActiveSet(!__isActive)
          }}
        >
          {x?.a}
        </a>
      )}

      <div className='info'>{x?.info}</div>

      {x?.submenu && (
        <div
          className={className('submenu', {
            collapsed: !__isActive,
          })}
        >
          <ul>
            {x?.submenu?.map((y, j) => (
              <li key={j}>
                <Link href={`/portfolios/${kebabCase(y?.li)}`}>
                  <a>{y?.li}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
