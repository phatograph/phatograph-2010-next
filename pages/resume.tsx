import React from 'react'
import {NextPage} from 'next'
// import className from 'classnames'
// import Link from 'next/link'

const Index: NextPage<{}> = () => {
  return (
    <div className='Home'>
      <div className='container'>
        <div className='Home__left'>
          <img src='http://www.gravatar.com/avatar/669eba01a4293df2f86fb10857efa0af?s=640' />
        </div>

        <div className='Home__right'>
          <h1 className='Home__h1'>
            <span>Pat</span>
            <span>Wangrungarun</span>
          </h1>

          <p className='Home__p'>
            Bangkok, Thailand · born in 1987
            <br />
            phatograph@gmail.com
            <br />
            phatograph.com
          </p>
        </div>

        <h2 className='Table__left'>Experience</h2>

        <div className='Table__right'>
          {(() => {
            const data = [
              {
                title: 'Front-end development team leader',
                company: 'Data Wow Co., Ltd.',
                time: '2019–present',
                lis: [
                  'Developed web applications focusing on Ruby on Rails, React, and Redux. Fell in love with Next.js. Adopted Docker for development environment.',
                  'In my younger days I could hardly imaging myself being team leader, but I am one now. So stuff like reports, process trackings, and task management have been my new norm.',
                ],
              },
              {
                title: 'Senior Front-end · Rails · Node.js developer',
                company: 'Nanameue Inc.',
                time: '2016–2019',
                lis: [
                  'Developed web applications focusing on Ruby on Rails, React, Redux, and Node.js. Products varied from a twitter-like social network, a social network analysing system, and a web scraping system.',
                  'Specialised in implementing off-the-grid designs, single page applications with complex modules, and interactive and animating graphs and charts.',
                ],
              },
              {
                title: 'Front-end · Rails · Node.js developer',
                company: 'Oozou Limited',
                time: '2012–2014',
                lis: [
                  'Developed web applications focusing on Ruby on Rails, AngularJs, and Node.js. Products varied from a startup management system, a real estate management system, a wiki system with medium-like text editor, and an asset management system with interactive graphs.',
                  'Switched to VIM, one of the best decision ever.',
                ],
              },
              {
                title: 'Software engineer',
                company: 'Thomson Reuters Software Thailand',
                time: '2010–2012',
                lis: [
                  'Developed a content management application platform using ASP.net C# WebForm. Maintained and improve Thread-based Windows Service.',
                  'Adapted an existing complex CSS and JavaScript to support modern browsers.',
                ],
              },
              {
                title: 'Front-end developer',
                company: 'Ecartstudio',
                time: '2009–2010',
                lis: [
                  'Developed a custom city map and point of interests web application using ASP.net C# MVC, and a content management system using PHP.',
                ],
              },
            ]

            return (
              <dl className='Data'>
                {data.map((x, i) => (
                  <div key={i} className='Data__item'>
                    <dt className='Data__dt'>
                      <span>{x.company}</span>
                      <small>{x.time}</small>
                    </dt>

                    <small className='Data__small'>{x.title}</small>

                    <ul className='Data__ul'>
                      {x?.lis?.map((y, j) => (
                        <li key={j} className='Data__ul__li'>
                          {y}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </dl>
            )
          })()}
        </div>

        <h2 className='Table__left'>Education</h2>

        <div className='Table__right'>
          {(() => {
            const data = [
              {
                company: 'University of St Andrews · <br />Maynooth University',
                time: '2014 – 2016',
                description: `MSc in Dependable Software Systems <br />
                (Erasmus Mundus two years programme)`,
              },
              {
                company: 'CHULALONGKORN UNIVERSITY',
                time: '2004 – 2008',
                description: `BSc in Computer Science (2<sup>nd</sup> honour)`,
              },
            ]

            return (
              <dl className='Data'>
                {data.map((x, i) => (
                  <div key={i} className='Data__item'>
                    <dt className='Data__dt'>
                      <span dangerouslySetInnerHTML={{__html: x.company}} />
                      <small>{x.time}</small>
                    </dt>

                    <dd
                      className='Data__dd'
                      dangerouslySetInnerHTML={{__html: x.description}}
                    />
                  </div>
                ))}
              </dl>
            )
          })()}
        </div>
      </div>
    </div>
  )
}

export default Index
