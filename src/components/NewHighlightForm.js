import React, { Component } from 'react';
import { Highlight } from './Highlight';

const INITIAL_STATE = {
  start: '',
  end: '',
  color: '',
  rank: '',
  error: null
};

/**
 * This class handles the form to create new Highlight objects.
 *
 * @param {Array.<number>} keys - The set of highlight priorities.
 * @callback addHighlight - Callback to add a new highlight.
 */
class NewHighlightForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE};
  }

  /** update the state with user's input */
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { start, end, color, rank } = this.state;
    const { keys, addHighlight } = this.props;
    const priority = parseInt(rank);
    if(keys.indexOf(priority) !== -1) {
      this.setState({ error: "Priority is already taken." });
      return;
    }
    this.setState({ error: null });
    const startOffset = parseInt(start);
    const endOffset = parseInt(end);
    addHighlight(new Highlight(startOffset, endOffset, color, priority));
  }

  render() {
    const { start, end, color, rank, error } = this.state;
    const isInvalid = isNaN(start) || isNaN(end) || !isNaN(color) || isNaN(rank)
        || rank === '' || start === '' || color === '' || rank === '';
    return (
      <form className="text-center" onSubmit={this.onSubmit}>
        <input
          name="start"
          value={start}
          onChange={this.onChange}
          className="form-control"
          type="text"
          placeholder="start offset"
        />
        <br/>
        <input
          name="end"
          value={end}
          onChange={this.onChange}
          className="form-control"
          type="text"
          placeholder="end offset"
        />
        <br/>
        <input
          name="color"
          value={color}
          onChange={this.onChange}
          className="form-control"
          type="text"
          placeholder="color"
        />
        <br/>
        <input
          name="rank"
          value={rank}
          onChange={this.onChange}
          className="form-control"
          type="text"
          placeholder="priority"
        />
        <br/>
        <button
          disabled={isInvalid}
          type="submit"
          className="btn btn-outline-primary"
        >
          Submit
        </button>
        <p className="mt-2 mb-0 text-danger">{error}</p>
      </form>
    )
  }
}

export default NewHighlightForm;
