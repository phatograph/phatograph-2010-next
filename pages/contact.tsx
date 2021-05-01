import React from 'react'
import {NextPage} from 'next'
import className from 'classnames'
import Link from 'next/link'

const Contact: NextPage<{}> = () => {
  return (
    <React.Fragment>
      <h2>
        Contact Me,
        <br />
        need any website ?
      </h2>

      <h3 className='contact'>
        <span>mail:</span> phatograph@gmail.com <br />
        <span>msn:</span> phatograph@hotmail.com
      </h3>

      <h3>
        <a href='http://twitter.com/phatograph' title='twitter'>
          <img src='/images/contact/twitter.png' />
        </a>{' '}
        <a href='http://www.facebook.com/phatograph' title='facebook'>
          <img src='/images/contact/facebook.png' />
        </a>
      </h3>
    </React.Fragment>
  )
}

export default Contact
