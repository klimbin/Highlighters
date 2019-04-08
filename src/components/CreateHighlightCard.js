import React, { Component } from 'react';

/**
 * This class is rendered in the highlight panel
 * to allow users to open the modal form window
 * and create a new highlight.
 *
 * @callback showForm - Callback to display modal to create highlight.
 */
class CreateHighlightCard extends Component {
  render() {
    const { showForm } = this.props;

    return (
      <div className="card text-center createHighlightContainer">
        <div className="card-body">
          <h5 className="card-title">
            Create Highlight
          </h5>
          <div className="card-text">
            <button
              className="btn btn-outline-dark"
              onClick={() => showForm(true)}
            >
              <span aria-hidden="true">&#xFF0B;</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
};

export default CreateHighlightCard;
