import React, { Component } from 'react';
import { PHRASE } from '../constants/Input';

const INITIAL_STATE = {
  query: PHRASE
};

/**
 * This class provides an input for users to create a
 * query on what phrase to look for within PAGE_TEXT.
 *
 * @callback setPhrase - Callback to update the search phrase.
 */
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE};
  }

  /** update the state with user's input */
  onChange = (event) => {
    const { setPhrase } = this.props;
    this.setState({ [event.target.name]: event.target.value },
      setPhrase(event.target.value));
  }

  render() {
    const { query } = this.state;

    return (
      <div className="searchBarContainer">
        <h6 className="searchBarLabel">Query:</h6>
        <input
          name="query"
          value={query}
          onChange={this.onChange}
          className="form-control"
          type="text"
          placeholder="search query"
        />
      </div>
    )
  }
}

export default SearchBar;
