import React, { Component } from 'react';

/**
 * This class renders the text of the page.
 *
 * @param {string} value - The text to be rendered.
 */
class Page extends Component {
  render() {
    return(
      <div className="leftContainer">
        <div className="text">
          <h4>Dear Future Self</h4>
          <h6>
            <a href="https://open.spotify.com/artist/6OqhFYFJDnBBHas02HopPT">
              Kero Kero Bonito
            </a>
          </h6>
        </div>
        <div className="text"
           dangerouslySetInnerHTML={{__html: this.props.value}}>
        </div>
      </div>
    )
  }
}

export default Page;
