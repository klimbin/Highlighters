import React, { Component } from 'react';
import NewHighlightForm from './NewHighlightForm';

/**
 * This class is a container for the NewHighlightForm
 * component to create new highlight objects
 * of the App and NewHighlightForm components.
 *
 * @param {string} phrase - The phrase to be highlighted.
 * @param {Array.<number>} keys - The set of highlight priorities.
 * @callback addHighlight - Callback to add a new highlight.
 * @callback showForm - Callback to display modal to create highlight.
 */
class ModalForm extends Component {
  render() {
    const { phrase, keys, addHighlight, showForm } = this.props;

    return (
      <div className="fullPageContainer">
        <div className="modalContainer">
          <div className="addForm">
            <button
              type="button"
              className="close"
              onClick={() => showForm(false)}>
              <span aria-hidden="true">&times;</span>
            </button>
            <h4>
              Create New Highlight
            </h4>
            <div className="phraseInfo">
              <p>
                Phrase: "{phrase}" (0,{phrase.length})
              </p>
            </div>
            <NewHighlightForm keys={keys} addHighlight={addHighlight}/>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalForm;
