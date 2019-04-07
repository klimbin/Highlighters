import React, { Component } from 'react';
import './Highlight.css';

/** Class representing a highlight. */
const Highlight = class {
  /**
   * Create a Highlight object.
   * @param {number} startOffset - The startOffset value.
   * @param {number} endOffset - The endOffset value.
   * @param {string} color - The highlight color.
   * @param {number} priority - The priority of the highlight.
   */
  constructor(startOffset, endOffset, color, priority) {
      this.startOffset = startOffset;
      this.endOffset = endOffset;
      this.color = color;
      this.priority = priority;
  }

  /**
   * @return {string} A string representing this Highlight object.
   */
  toString() {
      return `Highlight: (${this.startOffset},${this.endOffset})` +
              `, ${this.color}, priority = ${this.priority}`;
  }

  /**
   * Get the startOffset value.
   * @return {number} The startOffset value.
   */
  get startOffset() {
      return this._startOffset;
  }

  /**
   * Get the endOffset value.
   * @return {number} The endOffset value.
   */
  get endOffset() {
      return this._endOffset;
  }

  /**
   * Get the color value.
   * @return {string} The color value.
   */
  get color() {
      return this._color;
  }

  /**
   * Get the priority value.
   * @return {number} The priority value.
   */
  get priority() {
      return this._priority;
  }

  /**
   * Set the startOffset value.
   * @param {number} The startOffset value.
   */
  set startOffset(value) {
      this._startOffset = value;
  }

  /**
   * Set the endOffset value.
   * @param {number} The endOffset value.
   */
  set endOffset(value) {
      this._endOffset = value;
  }

  /**
   * Set the color value.
   * @param {string} The color value.
   */
  set color(value) {
      this._color = value;
  }

  /**
   * Set the priority value.
   * @param {number} The priority value.
   */
  set priority(value) {
      this._priority = value;
  }
};

/** This class renders boxes to represent each highlight object. */
class HighlightPanel extends Component {
  /**
   * This method takes a key unique to a highlight object
   * then calls a callback function to remove the given highlight.
   * Note that we use the highlight priority for the key.
   *
   * @param {number} key
   */
  deleteHighlight = (key) => {
    this.props.highlightChange(key);
  }

  /**
   * This method takes a highlight object and
   * returns a div representing the highlight.
   *
   * @param {Object.<Highlight>} highlight
   */
  renderHighlightBox = (highlight) => {
    const phrase = this.props.phrase;
    const {startOffset, endOffset, color, priority} = highlight;
    const classNames = ['card render-' + priority]
    const style = {backgroundColor: color};
    return (
      <div key={priority} className={classNames} style={style}>
        <div className="card-body">
          <h5 className="card-title">
            Highlight {priority}
          </h5>
          <h6 className="card-subtitle">
            ({startOffset}, {endOffset})
          </h6>
          <div className="card-text">
            <p>
              "{phrase.substring(startOffset, endOffset)}"
            </p>
            <button
              className="btn btn-outline-dark"
              onClick={() => this.deleteHighlight(priority)}
            >
              <span aria-hidden="true">remove</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const highlightBoxes = this.props.highlights.map(highlight =>
      this.renderHighlightBox(highlight)
    );

    return (
      <div id="highlightBoxContainer">
        { highlightBoxes }
      </div>
    );
  }
}

export default HighlightPanel;
export { Highlight };