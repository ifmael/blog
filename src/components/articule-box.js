import React from 'react'
import { Link } from 'gatsby'
import './articule-box.css';

export default ({title, excerpt, date, slug}) => (
  <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-128x128">
          <img src="https://bulma.io/images/placeholders/128x128.png"alt="" />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <div  className="level no-margin-bottom">
            <div className="level-left">
              <div className="level-item">
                <h2>
                  <Link to={slug}>
                    {title}
                  </Link>
                </h2>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <span>{date}</span>
              </div>
            </div>
          </div>
          <p>
            {excerpt}
          </p>
        </div>
      </div>
    </article>
  </div>
)


