import React, { Component } from 'react';

class Page extends Component {
  render() {
    return(
      <div className="leftContainer">
        <p className="text"
           dangerouslySetInnerHTML={{__html: this.props.value}}>
        </p>
      </div>
    )
  }
}

export default Page;
