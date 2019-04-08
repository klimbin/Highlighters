import { Highlight } from '../components/Highlight';

/**
 * The text of the page to search through.
 * @constant
 */
const PAGE_TEXT = `<h4>Dear Future Self</h4>
  <h6>
    <a href="https://open.spotify.com/artist/6OqhFYFJDnBBHas02HopPT">
      Kero Kero Bonito
    </a>
  </h6>
  Dear future self, it's me again</br>
  You will deliver new technology with an adorable puppy. Perfect!</br>
  The girl you buried way back when</br>
  I see you gave into curiosity</br>
  You will deliver new technology with an adorable puppy. Perfect!</br>
  My life right now is going well</br>
  I've time to spare as one can tell</br>
  You will deliver new technology with an adorable puppy. Perfect!</br>
  But you might just sense some trepidation too</br>
  You will deliver new technology with an adorable puppy. Perfect!</br>
  No one knows where they really want to go</br>
  Why we always stay inside</br>
  And now it snows</br>
  But I bet you miss it all</br>
  So</br>
  Do cars ever fly?</br>
  Have you travelled time?</br>
  You will deliver new technology with an adorable puppy. Perfect!</br>
  Or is it just the same old thing for you and I?</br>
  I used to be fine because you always seemed so far away</br>
  But now I feel our paths getting closer each day</br>
  You'll find enclosed, a passport photograph</br>
  The headlines and a railcard</br>
  It's funny how physical us humans are</br>
  You will deliver new technology with an adorable puppy. Perfect!</br>
  Ahh-ahh-ahh-ahh</br>
  But I heard all the years'll leave you hurt</br>
  Everyone you love disappears and nothing works</br>
  Please don't say you hate the world</br>
  I hope that I won't</br>
  You will deliver new technology with an adorable puppy. Perfect!</br>
  Do cars ever fly?</br>
  Have you travelled time?</br>
  Or is it just the same old thing for you and I?</br>
  You will deliver new technology with an adorable puppy. Perfect!</br>
  I used to be fine because you always seemed so far away</br>
  But now I feel our paths getting closer each day</br>
  It's rather strange`;

/**
 * The phrase to highlight.
 * @constant
 */
const PHRASE = 'You will deliver new technology with an adorable puppy. Perfect!';

/**
 * The initial highlight objects to render.
 * @constant
 */
const HIGHLIGHT_OBJECTS = [
  new Highlight(0, 31,'#ec98ae', 0),
  new Highlight(24, 27, '#eccf98', 1),
  new Highlight(4, 18, '#d9f593', 2),
  new Highlight(19, 22, '#e8e8e8', 3),
  new Highlight(17, 31, '#c6e5fa', 4),
  new Highlight(40, 48, '#d9f593', 5),
  new Highlight(40, 55, '#ee93f5', 6),
  new Highlight(37, 55, '#c6e5fa', 7),
  new Highlight(56, 64, '#eccf98', 8),
  new Highlight(-20, 100, 'yellow', 9)
];

export { PAGE_TEXT, PHRASE, HIGHLIGHT_OBJECTS };
