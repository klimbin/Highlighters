import React, { Component } from 'react';

/**
 * This class is rendered in the highlight panel
 * and allows users to open the modal form window
 * to create a new highlight.
 */
class CreateHighlight extends Component {
  render() {
    return (
      <div className="card text-center createHighlightContainer">
        <div className="card-body">
          <h5 className="card-title">
            Create Highlight
          </h5>
          <div className="card-text">
            <button
              className="btn btn-outline-dark"
              onClick={() => this.props.openAddForm()}
            >
              <span aria-hidden="true">+</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
};

export default CreateHighlight;
