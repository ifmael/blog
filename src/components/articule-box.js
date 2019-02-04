import React from 'react'
import './articule-box.css';

export default () => (
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
                  This is a header example
                </h2>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <span>27/07/1986</span>
              </div>
            </div>
          </div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
          </p>
        </div>
      </div>
    </article>
  </div>
)


