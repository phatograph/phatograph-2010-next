import React from 'react'
import {NextPage} from 'next'
import className from 'classnames'
import Link from 'next/link'

const About: NextPage<{}> = () => {
  return (
    <React.Fragment>
      <h2>
        About Me,
        <br />
        Phatograph.com
      </h2>

      <h3 className='about'>
        <p>
          Phatograph.com is originally php-powered by{' '}
          <a href='http://codeigniter.com/'>CodeIgniter</a> framework, written
          in MVC pattern. Later on, instead of CodeIgniter's traditional Model,{' '}
          <a href='http://www.doctrine-project.org/'>Doctrine</a> is used as an
          ORM for flexible Model handling and Relationship designing. JavaScript
          is supported by jQuery, jQueryColor, and jQueryEasing.
        </p>

        <div className='al-c pt-20'>
          <img src='/images/footer-logo.jpg' />
        </div>
      </h3>
    </React.Fragment>
  )
}

export default About
