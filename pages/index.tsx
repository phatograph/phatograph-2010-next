import React from 'react'
import {NextPage} from 'next'
import className from 'classnames'
import drop from 'lodash/drop'
// import Link from 'next/link'

const Index: NextPage<{}> = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='clearfix'>
          <div className='siteinfo'>
            <a href=''>
              <h1>Phatograph.com</h1>
            </a>

            <div className='content'>
              <h2>
                CodeIgniter, Doctrine,
                <br />
                jQuery, HTML, CSS
                <br />
                and my Playground !
              </h2>
            </div>
          </div>

          <div className='menu'>
            {(() => {
              const data = [
                {
                  a: 'Home',
                  info: 'phatograph.com',
                },
                {
                  a: 'Projects',
                  info: 'ongoing projects',
                  submenu: [
                    {
                      li: 'Kiangdao Resort',
                    },
                    {
                      li: 'Form Architect',
                    },
                  ],
                },
                {
                  a: 'Portfolio',
                  info: 'recent works',
                  submenu: [
                    {
                      li: 'CSCU Open House 2007',
                    },
                    {
                      li: 'CSCU MD. Plan Newspaner Ads.',
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
                },
                {
                  a: 'Contact',
                  info: 'want any site?',
                },
              ]

              return (
                <div className='clearfix'>
                  {data.map((x, i) => (
                    <div className='menubox' key={i}>
                      <a>{x?.a}</a>
                      <div className='info'>{x?.info}</div>

                      {x?.submenu && (
                        <div className='submenu'>
                          <ul>
                            {x?.submenu?.map((y, j) => (
                              <li key={j}>{y?.li}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
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
        <div className='content'>Copyright &#169 2010 Phatograph Project</div>
        <div className='subs'>powered by CodeIgniter and Doctrine.</div>
      </div>
    </div>
  )
}

export default Index
