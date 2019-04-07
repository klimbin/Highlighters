import React, { Component } from 'react';
import { PHRASE } from '../constants/Input';

import AddForm from './AddForm';

/**
 * This class is a container for the AddForm
 * component to create new highlight objects
 * of the App and AddForm components.
 */
class ModalForm extends Component {
  render() {
    const { keys, addHighlight } = this.props;

    return (
      <div className="fixedContainer">
        <div className="addFormContainer">
          <div className="addForm">
            <h4>
              Create New Highlight
            </h4>
            <div className="phraseInfo">
              <p>
                Phrase: {PHRASE} (0,{PHRASE.length})
              </p>
            </div>
            <AddForm keys={keys} addHighlight={addHighlight}/>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalForm;
