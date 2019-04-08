import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Page from './Page';
import HighlightPanel from './Highlight';
import ModalForm from './ModalForm';
import { PAGE_TEXT, PHRASE, HIGHLIGHT_OBJECTS } from '../constants/Input';
import './App.css';

const INITIAL_STATE = {
  pageText: PAGE_TEXT,
  phrase: PHRASE,
  highlights: HIGHLIGHT_OBJECTS,
  highlightRender: null,
  displayForm: false
};

/**
 * This class will render the highlights for the phrase
 * on every occurrence in the pageText.
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE};
  }

  componentDidMount() {
    this.updateRenders();
  }

  /**
   * This method will update state to handle whether
   * the ModalForm should be rendered.
   *
   * @param {boolean} value
   */
  showForm = (value) => {
    this.setState({ displayForm: value });
  }

  /**
   * This method takes a Highlight object
   * and adds it to the App state.
   *
   * @param {Object.<Highlight>} highlight
   */
  addHighlight = (highlight) => {
    const { highlights } = this.state;
    this.setState({
      highlights: [...highlights, highlight],
      displayForm: false
    }, this.updateRenders);
  }

  /**
   * This method takes a key unique to a highlight object
   * then removes the given highlight from the App state.
   * Note that we use the highlight priority for the key.
   *
   * @param {number} key
   */
  removeHighlight = (key) => {
    const { highlights } = this.state;
    const newHighlights = highlights.filter((h) => h.priority !== key);
    this.setState({ highlights: newHighlights }, this.updateRenders);
  }

  /**
   * This method takes a string to search
   * for within the PAGE_TEXT.
   *
   * @param {string} query
   */
  setPhrase = (query) => {
    this.setState({ phrase: query }, this.updateRenders);
  }

  /**
   * This method clears the previous renders
   * and creates new highlight renders.
   *
   * @param {number} key
   */
  updateRenders = () => {
    const { pageText, phrase, highlights } = this.state;
    const renders = calculateRenders(phrase.length, highlights);
    const newRender = getHighlightedText(phrase, renders);
    this.setState({ highlightRender: pageText.split(phrase).join(newRender) });
  }

  render() {
    const { phrase, highlights, highlightRender, displayForm } = this.state;
    const highlightKeys = highlights.map((h) => h.priority);

    if(displayForm) {
      return(
        <div>
          <SearchBar setPhrase={this.setPhrase} />
          <Page value={highlightRender} />
          <HighlightPanel
            phrase={phrase}
            highlights={highlights}
            removeHighlight={this.removeHighlight}
            showForm={this.showForm}
          />
          <ModalForm
            phrase={phrase}
            keys={highlightKeys}
            addHighlight={this.addHighlight}
            showForm={this.showForm}
          />
        </div>
      )
    }

    return(
      <div>
        <SearchBar setPhrase={this.setPhrase} />
        <Page value={highlightRender} setPhrase={this.setPhrase}/>
        <HighlightPanel
          phrase={phrase}
          highlights={highlights}
          removeHighlight={this.removeHighlight}
          showForm={this.showForm}
        />
      </div>
    )
  }
}

export default App;

/**
 * This function takes an array of highlight objects and
 * and normalizes the ranges to create a set of highlight
 * renders without any overlapping.
 *
 * Highlight renders are arrays represented by [start, end, color, priority].
 *
 * @param {number} inputLength - The length of the phrase to be highlighted.
 * @param {Array.<Highlight>} highlights - A set of highlight objects.
 *
 * @return {Array.<Array.<Number, Number, String, Number>>} An array of highlight renders.
 */
const calculateRenders = (inputLength, highlights) => {
  // sort highlights from top to bottom by their priority
  // note that lower numbers are higher in priority
  highlights.sort((a,b) => a.priority - b.priority);

  // renders will store set of highlight objects that do not overlap
  let renders = [];

  // this string will represent which indices are already highlighted
  let spotsFilled = '0'.repeat(inputLength);

  for (let i = 0; i < highlights.length; i++) {
    let current = highlights[i];
    let [start, end] = [current.startOffset, current.endOffset];

    // ignore current highlight if it does not have a valid range
    if(start >= end || end <= 0 || start >= inputLength) {
      continue;
    }
    if(start < 0) {
      start = 0;
    }
    if(end > inputLength) {
      end = inputLength;
    }

    let [color, priority] = [current.color, current.priority];
    let sectionToConsider = spotsFilled.substring(start, end);
    let firstOccurrence = sectionToConsider.indexOf('1');

    if(firstOccurrence === -1) {
      // no overlaps with other highlights
      renders.push([start, end, color, priority]);
    }
    else {
      // there is overlapping with other highlight(s)
      if(firstOccurrence > 0) {
        renders.push([start, start+firstOccurrence, color, priority]);
      }

      let lastOccurrence = sectionToConsider.lastIndexOf('1');

      // handle cases of multiple highlight overlaps
      let nextOccurrence = sectionToConsider.indexOf('1', firstOccurrence+1);
      while(nextOccurrence !== -1) {
        if(nextOccurrence - firstOccurrence > 1) {
          renders.push([start+firstOccurrence+1, start+nextOccurrence, color, priority]);
        }
        firstOccurrence = nextOccurrence;
        nextOccurrence = sectionToConsider.indexOf('1', firstOccurrence+1);
      }

      if(lastOccurrence < sectionToConsider.length-1) {
        renders.push([start+lastOccurrence+1, end, color, priority]);
      }
    }
    spotsFilled = spotsFilled.substring(0, start) + '1'.repeat(end-start) + spotsFilled.substring(end);
  }
  return renders;
}

/**
 * This function takes a set of highlight renders
 * and returns HTML code to represent the highlights.
 * The highlight renders must not have overlaps.
 *
 * @param {string} string - The phrase to be highlighted.
 * @param {Array.<Array.<Number, Number, String, Number>>} sections
 *
 * Highlight renders are represented by [start, end, color, priority].
 *
 * @return {string} HTML markup representing the highlighted phrase.
 */
const getHighlightedText = (string, sections) => {
  // sort sections by increasing startOffset
  sections.sort((a,b) => a[0] - b[0]);

  // append each section with their highlights
  let result = [];
  let currentIndex = 0;
  for(let i = 0; i < sections.length; i++) {
    let [start, end, color, priority] = sections[i];
    let section = string.substring(currentIndex, start);
    section += `<span class="render-${priority}"` +
               ` style="background-color:${color}">` +
               `${string.substring(start, end)}</span>`;
    result.push(section);
    currentIndex = end;
  }
  result.push(string.substring(currentIndex));
  return result.join('');
}
