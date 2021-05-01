import React from 'react'
import {NextPage} from 'next'
// import className from 'classnames'
// import Link from 'next/link'
import {useRouter} from 'next/router'

const DATA = [
  {
    id: 'cscu-open-house-2007',
    body: (
      <React.Fragment>
        <h2>
          CSCU
          <br />
          Openhouse Poster
        </h2>

        <div className='port'>
          <div className='text'>
            <div className='clearfix'>
              <h4>
                <p>
                  The poster contains a study program for Master degree of
                  Computer Science Major, Pure and Applied Mathematics Major
                  from Faculty of Science, Chulalongkorn University.
                </p>
                <p>
                  Samples of Theses from graduated students also available in
                  the poster.
                </p>
              </h4>
              <div className='info'>
                <div className='line'>
                  <div className='left'>type :</div>
                  <div className='right'>Printed poster</div>
                </div>
                <div className='line'>
                  <div className='left'>size :</div>
                  <div className='right'>A1 x2</div>
                </div>
                <div className='line'>
                  <div className='left'>software :</div>
                  <div className='right'>
                    Adobe Illustrator
                    <br />
                    Adobe Photoshop
                  </div>
                </div>
                <div className='line'>
                  <div className='left'>date :</div>
                  <div className='right'>November 2007</div>
                </div>
                <div className='line'>
                  <div className='left'>designed :</div>
                  <div className='right'>Phatograph</div>
                </div>
              </div>
            </div>
            <span className='clearall'></span>
          </div>

          <div className='images'>
            <div className='clearfix'>
              {Array.from(Array(3)).map((x, i) => (
                <div className='imgbox' key={i}>
                  <a
                    href={`/images/portfolio/cscu_openhouse_2007/${i + 1}.jpg`}
                    target='_blank'
                    rel='nofollow noopener noreferrer'
                  >
                    <img
                      src={`/images/portfolio/cscu_openhouse_2007/thumb_100x100/${i +
                        1}.jpg`}
                    />
                  </a>
                </div>
              ))}
            </div>

            <span className='clearall'></span>
          </div>
        </div>
      </React.Fragment>
    ),
  },
  {
    id: 'cscu-ms-plan-newspaner-ads',
    body: (
      <React.Fragment>
        <h2>
          CSCU MS plan
          <br />
          Newspaper Ads.
        </h2>

        <div className='port'>
          <div className='text'>
            <div className='clearfix'>
              <h4>
                <p>
                  Advertisement of Computer Science and Information Master
                  degree rough detail of the Major's Study program, Studay plan,
                  Advisers, and Contact form.
                </p>
                <p>
                  Printed in Prachachat business newspaper
                  <br />
                  (MS plan special edition). Multiple size and layout available,
                  also in coloured version.
                </p>
              </h4>
              <div className='info'>
                <div className='line'>
                  <div className='left'>type :</div>
                  <div className='right'>Printed matter</div>
                </div>
                <div className='line'>
                  <div className='left'>size :</div>
                  <div className='right'>A3 (printed version)</div>
                </div>
                <div className='line'>
                  <div className='left'>software :</div>
                  <div className='right'>
                    Adobe Illustrator
                    <br />
                    Adobe Photoshop
                  </div>
                </div>
                <div className='line'>
                  <div className='left'>date :</div>
                  <div className='right'>March 2008</div>
                </div>
                <div className='line'>
                  <div className='left'>designed :</div>
                  <div className='right'>Phatograph</div>
                </div>
              </div>
            </div>
            <span className='clearall'></span>
          </div>

          <div className='images'>
            <div className='clearfix'>
              {Array.from(Array(3)).map((x, i) => (
                <div className='imgbox' key={i}>
                  <a
                    href={`/images/portfolio/cscu_ms_plan_ads/${i + 1}.jpg`}
                    target='_blank'
                    rel='nofollow noopener noreferrer'
                  >
                    <img
                      src={`/images/portfolio/cscu_ms_plan_ads/thumb_100x100/${i +
                        1}.jpg`}
                    />
                  </a>
                </div>
              ))}
            </div>

            <span className='clearall'></span>
          </div>
        </div>
      </React.Fragment>
    ),
  },
  {
    id: 'cscu-2301350-notebook-ui-design',
    body: (
      <React.Fragment>
        <h2>
          CSCU 2301350
          <br />
          Notebook UI Design
        </h2>

        <div className='port'>
          <div className='text'>
            <div className='clearfix'>
              <h4>
                <p>
                  Final Project of User Interface design subject, Computer
                  Science Major, Faculty of Science, Chulalongkorn University,
                  Notebook User Interface design.
                </p>
                <p>
                  The propose of the project is to discuss the cons and pros of
                  selected object and create a new prototype.
                </p>
                <p>
                  What a rough modeling. I'm not good in 3D projects, but really
                  want to try it out again if I have a chance. :)
                </p>
              </h4>
              <div className='info'>
                <div className='line'>
                  <div className='left'>type :</div>
                  <div className='right'>3D Video</div>
                </div>
                <div className='line'>
                  <div className='left'>size :</div>
                  <div className='right'>original 720x480</div>
                </div>
                <div className='line'>
                  <div className='left'>software :</div>
                  <div className='right'>
                    3DS MAX
                    <br />
                    Adobe Premiere Pro
                  </div>
                </div>
                <div className='line'>
                  <div className='left'>date :</div>
                  <div className='right'>February 2008</div>
                </div>
                <div className='line'>
                  <div className='left'>product :</div>
                  <div className='right'>Phatograph</div>
                </div>
              </div>
            </div>
            <span className='clearall'></span>
          </div>

          <div className='images'>
            <iframe
              width='100%'
              height='315'
              src='https://www.youtube.com/embed/smDuVUcRkUg'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </div>
        </div>
      </React.Fragment>
    ),
  },
  {
    id: 'workpoint-studio-plate-for-asa-competition',
    body: (
      <React.Fragment>
        <h2>
          Workpoint Studio
          <br />
          Plate for ASA Competition
        </h2>

        <div className='port'>
          <div className='text'>
            <div className='clearfix'>
              <h4>
                <p>
                  Poster plate layout design for Workpoint Studio Project. Used
                  in ASA's Best Architectural Competition 2008 (golden medal
                  awarded).
                </p>
                <p>
                  Design by Suthit Wangrungarun <br />
                  Form Architect Co.,ltd.
                </p>
              </h4>
              <div className='info'>
                <div className='line'>
                  <div className='left'>type :</div>
                  <div className='right'>Printed poster</div>
                </div>
                <div className='line'>
                  <div className='left'>size :</div>
                  <div className='right'>A1 x2</div>
                </div>
                <div className='line'>
                  <div className='left'>software :</div>
                  <div className='right'>Adobe Photoshop</div>
                </div>
                <div className='line'>
                  <div className='left'>date :</div>
                  <div className='right'>April 2009</div>
                </div>
                <div className='line'>
                  <div className='left'>designed :</div>
                  <div className='right'>Suthit W.</div>
                </div>
              </div>
            </div>
            <span className='clearall'></span>
          </div>

          <div className='images'>
            <div className='clearfix'>
              {Array.from(Array(2)).map((x, i) => (
                <div className='imgbox' key={i}>
                  <a
                    href={`/images/portfolio/workpoint_plate/${i + 1}.jpg`}
                    target='_blank'
                    rel='nofollow noopener noreferrer'
                  >
                    <img
                      src={`/images/portfolio/workpoint_plate/thumb_100x100/${i +
                        1}.jpg`}
                    />
                  </a>
                </div>
              ))}
            </div>

            <span className='clearall'></span>
          </div>
        </div>
      </React.Fragment>
    ),
  },
  {
    id: 'sakchai-solution-site-design',
    body: (
      <React.Fragment>
        <h2>Sakchai Solutions Co.,ltd</h2>

        <div className='port'>
          <div className='text'>
            <div className='clearfix'>
              <h4>
                <p>
                  Sakchai Solutions Co.,ltd concept website design (not
                  constructed).
                </p>
              </h4>
              <div className='info'>
                <div className='line'>
                  <div className='left'>type :</div>
                  <div className='right'>Web design (PSD)</div>
                </div>
                <div className='line'>
                  <div className='left'>size :</div>
                  <div className='right'>685px width</div>
                </div>
                <div className='line'>
                  <div className='left'>software :</div>
                  <div className='right'>Adobe Photoshop</div>
                </div>
                <div className='line'>
                  <div className='left'>date :</div>
                  <div className='right'>June 2009</div>
                </div>
                <div className='line'>
                  <div className='left'>designed :</div>
                  <div className='right'>Phatograph</div>
                </div>
              </div>
            </div>
            <span className='clearall'></span>
          </div>

          <div className='images'>
            <div className='clearfix'>
              {Array.from(Array(2)).map((x, i) => (
                <div className='imgbox' key={i}>
                  <a
                    href={`/images/portfolio/sakchai_design/${i + 1}.jpg`}
                    target='_blank'
                    rel='nofollow noopener noreferrer'
                  >
                    <img
                      src={`/images/portfolio/sakchai_design/thumb_100x100/${i +
                        1}.jpg`}
                    />
                  </a>
                </div>
              ))}
            </div>

            <span className='clearall'></span>
          </div>
        </div>
      </React.Fragment>
    ),
  },
  {
    id: 'cscu-13-yearbook',
    body: (
      <React.Fragment>
        <h2>
          CSCU #13
          <br />
          Yearbook
        </h2>

        <div className='port'>
          <div className='text'>
            <div className='clearfix'>
              <h4
                style={{
                  height: '100px',
                }}
              >
                <p>
                  Memorial Yearbook of Computer Science Major class 13th,
                  Faculty of Science, Chulalongkorn University.
                </p>
              </h4>

              <div className='info'>
                <div className='line'>
                  <div className='left'>type :</div>
                  <div className='right'>Printed matter</div>
                </div>

                <div className='line'>
                  <div className='left'>size :</div>
                  <div className='right'>10" x 10"</div>
                </div>

                <div className='line'>
                  <div className='left'>software :</div>
                  <div className='right'>Adobe Photoshop</div>
                </div>

                <div className='line'>
                  <div className='left'>date :</div>
                  <div className='right'>April 2009</div>
                </div>

                <div className='line'>
                  <div className='left'>designed :</div>
                  <div className='right'>Phatograph</div>
                </div>

                <div className='line'>
                  <div className='left'>photos :</div>

                  <div className='right'>
                    Panjarad T. <br />
                    Chaiboon S. <br />
                    Chalermpol S.
                  </div>
                </div>
              </div>
            </div>

            <span className='clearall'></span>
          </div>

          <div className='images'>
            <div className='clearfix'>
              {Array.from(Array(9)).map((x, i) => (
                <div className='imgbox' key={i}>
                  <a
                    href={`/images/portfolio/cscu_13_yearbook/${i + 1}.jpg`}
                    target='_blank'
                    rel='nofollow noopener noreferrer'
                  >
                    <img
                      src={`/images/portfolio/cscu_13_yearbook/thumb_100x100/${i +
                        1}.jpg`}
                    />
                  </a>
                </div>
              ))}
            </div>

            <span className='clearall'></span>
          </div>
        </div>
      </React.Fragment>
    ),
  },
]

const PortfoliosShow: NextPage<{}> = () => {
  const router = useRouter()

  const data = DATA.find((x) => x?.id == router?.query?.id)

  if (!data?.body) {
    return null
  }

  return data?.body
}

export default PortfoliosShow
