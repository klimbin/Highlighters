import { Highlight } from '../components/Highlight';

/**
 * The text of the page to search through.
 * @constant
 */
const PAGE_TEXT = `
Dear future self, it's me again
You will deliver new technology with an adorable puppy. Perfect!
The girl you buried way back when
I see you gave into curiosity
You will deliver new technology with an adorable puppy. Perfect!
My life right now is going well
I've time to spare as one can tell
You will deliver new technology with an adorable puppy. Perfect!
But you might just sense some trepidation too
You will deliver new technology with an adorable puppy. Perfect!
No one knows where they really want to go
Why we always stay inside
And now it snows
But I bet you miss it all
So
Do cars ever fly?
Have you travelled time?
You will deliver new technology with an adorable puppy. Perfect!
Or is it just the same old thing for you and I?
I used to be fine because you always seemed so far away
But now I feel our paths getting closer each day
You'll find enclosed, a passport photograph
The headlines and a railcard
It's funny how physical us humans are
You will deliver new technology with an adorable puppy. Perfect!
Ahh-ahh-ahh-ahh
But I heard all the years'll leave you hurt
Everyone you love disappears and nothing works
Please don't say you hate the world
I hope that I won't
You will deliver new technology with an adorable puppy. Perfect!
Do cars ever fly?
Have you travelled time?
Or is it just the same old thing for you and I?
You will deliver new technology with an adorable puppy. Perfect!
I used to be fine because you always seemed so far away
But now I feel our paths getting closer each day
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
  new Highlight(19, 22, '#c6e5fa', 3),
  new Highlight(17, 31, '#e8e8e8', 4),
  new Highlight(40, 48, '#ee93f5', 5),
  new Highlight(40, 55, '#59acff', 6),
  new Highlight(37, 55, '#f9b8ae', 7),
  new Highlight(56, 64, '#79ed6f', 8),
  new Highlight(0, 64, '#f1f593', 9)
];

export { PAGE_TEXT, PHRASE, HIGHLIGHT_OBJECTS };
