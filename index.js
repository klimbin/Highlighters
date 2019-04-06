"use strict";
const string = 'You will deliver new technology with an adorable puppy. Perfect!';
const highlights = [
    {
        startOffset: 29,
        endOffset: 30,
        color: 'black', // g
        priority: 0,
    },
    {
        startOffset: 24,
        endOffset: 27,
        color: '#eccf98', // hno
        priority: 1,
    },
    {
        startOffset: 4,
        endOffset: 18,
        color: '#d9f593', // will deliver n
        priority: 2,
    },
    {
        startOffset: 19,
        endOffset: 22,
        color: '#e8e8e8', // w t
        priority: 3,
    },
    {
        startOffset: 17,
        endOffset: 31,
        color: '#c6e5fa', // new technology
        priority: 4,
    },
    {
        startOffset: 40,
        endOffset: 48,
        color: '#d9f593', // adorable with space before
        priority: 5,
    },
    {
        startOffset: 40,
        endOffset: 55,
        color: '#ee93f5', // adorable puppy
        priority: 6,
    },
    {
        startOffset: 37,
        endOffset: 55,
        color: '#c6e5fa', // an adorable puppy
        priority: 7,
    },
    {
        startOffset: 56,
        endOffset: 64,
        color: '#eccf98', // perfect
        priority: 8,
    },
    {
        startOffset: -21321,
        endOffset: 12432,
        color: 'yellow', // entire input string
        priority: 90,
    },
];

/**
 * This function takes an array of highlight objects and
 * and normalizes the ranges to create a set of highlight
 * renders without any overlapping.
 *
 * Highlight renders are arrays represented by [start, end, color, priority].
 *
 * @param {String} string - The phrase to be highlighted.
 * @param {Array.<Highlight>} highlights - A set of highlight objects.
 *
 * @return {Array.<Array.<Number, Number, String, Number>>} An array of highlight renders.
 */
const calculateRenders = (string, highlights) => {
    // sort highlights from top to bottom by their priority
    // note that lower numbers are higher in priority
    highlights.sort((a,b) => a.priority - b.priority);

    // renders will store set of highlight objects that do not overlap
    let renders = [];
    let inputLength = string.length;

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

        if(firstOccurrence == -1) {
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
            while(nextOccurrence != -1) {
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
 * @param {Array.<Array.<Number, Number, String, Number>>} sections - An array of highlight renders.
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

/**
 * This function searches the HTML body tag
 * and replaces all occurrences of the given string.
 *
 * @param {string} string - The text to search for.
 * @param {string} replacementString - The replacement text.
 */
const replaceText = (string, replacementString) => {
    let body = document.getElementsByTagName('BODY')[0];
    body.innerHTML = body.innerHTML.split(string).join(replacementString);
}

let renders, renderText;
/*
 * This function erases the previous render(if any),
 * then renders out the new text with highlights.
 *
 * @param {string} string - The phrase to be highlighted.
 * @param {Array.<Highlight>} highlights - A set of highlight objects.
 */
const applyHighlights = (string, highlights) => {
    // if previous render exists erase them
    if(renderText) {
        replaceText(renderText, string);
    }

    // render out the new highlights
    renders = calculateRenders(string, highlights);
    renderText = getHighlightedText(string, renders);
    replaceText(string, renderText);
}
applyHighlights(string, highlights);

const deleteOneLayer = () => {
    if(highlights.length > 0) {
        highlights.pop();
        applyHighlights(string, highlights);
    }
}
