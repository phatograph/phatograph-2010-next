import React from 'react'
import {NextPage} from 'next'
import className from 'classnames'
import Link from 'next/link'

const Index: NextPage<{}> = () => {
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
          <a href='http://codeigniter.com/'>CodeIgniter')</a>
          framework, written in MVC pattern. Later on, instead of CodeIgniter's
          traditional Model,{' '}
          <a href='http://www.doctrine-project.org/'>Doctrine</a>
          is used as an ORM for flexible Model handling and Relationship
          designing. Javasript is supported by jQuery, jQueryColor, and
          jQueryEasing.
        </p>

        <div className='al-c pt-20'>
          <img src='/images/footer-logo.jpg' />
        </div>
      </h3>
    </React.Fragment>
  )
}

export default Index

const MenuBox = ({x}) => {
  const [__isActive, __isActiveSet] = React.useState(false)

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
              <li key={j}>{y?.li}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
