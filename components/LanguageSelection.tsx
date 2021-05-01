import React from 'react'
import PropTypes from 'prop-types'
import {get, isNil} from 'lodash'
import className from 'classnames'
import {NextPage} from 'next'
import Link from 'next/link'
import {useRouter} from 'next/router'

const NavLinks: NextPage<{
  data?: any
}> = ({data}) => {
  const router = useRouter()

  return (
    <div className='Nav__lang'>
      <div className='Nav__lang__item'>
        <a
          className={className('Nav__lang__a', {
            'Nav__lang__a--active': get(router, 'locale') == 'en',
          })}
          onClick={() => {
            router.push(get(router, 'pathname'), get(router, 'pathname'), {
              locale: 'en',
            })
          }}
        >
          ENG
        </a>
      </div>

      <div className='Nav__lang__item'>
        <a
          className={className('Nav__lang__a', {
            'Nav__lang__a--active': get(router, 'locale') == 'th',
          })}
          onClick={() => {
            router.push(get(router, 'pathname'), get(router, 'pathname'), {
              locale: 'th',
            })
          }}
        >
          ไทย
        </a>
      </div>
    </div>
  )
}

NavLinks.propTypes = {}

export default NavLinks
