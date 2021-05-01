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
                CodeIgniter, Doctrine,<br />
                jQuery, HTML, CSS<br />
                and my Playground !
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
