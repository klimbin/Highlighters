import React from 'react';

/**
 * Ascii art of a bunny.
 * @constant
 */
const BUNNY = '\x7B\\\x5F\x5F\x2F\x7D\n\x28\x20\u2022\x20\x2E\x20\u2022\x29\n\x2F\x20\x3E\u2764\uFE0F\x20\x75\x20\x77\x61\x6E\x74\x20\x74\x68\x69\x73\x3F\n\n\x7B\\\x5F\x5F\x2F\x7D\n\x28\x20\u2022\x20\x2D\x20\u2022\x29\n\x2F\x3E\u2764\uFE0F\x20\x68\x65\x72\x65\n\x20\x20\x20\u2764\uFE0F\uD83E\uDDE1\x20\x75\n\x20\x20\x20\u2764\uFE0F\uD83E\uDDE1\uD83D\uDC9B\x20\x67\x6F\n\x20\x20\x20\u2764\uFE0F\uD83E\uDDE1\uD83D\uDC9B\uD83D\uDC9A\x20\x75\n\x20\x20\x20\u2764\uFE0F\uD83E\uDDE1\uD83D\uDC9B\uD83D\uDC9A\uD83D\uDC99\x20\x64\x69\x64\n\x20\x20\x20\u2764\uFE0F\uD83E\uDDE1\uD83D\uDC9B\uD83D\uDC9A\uD83D\uDC99\uD83D\uDC9C\x20\x77\x65\x6C\x6C\n\x20\x20\x20\u2764\uFE0F\uD83E\uDDE1\uD83D\uDC9B\uD83D\uDC9A\uD83D\uDC99\uD83D\uDC9C\uD83D\uDC97\x20\x74\x6F\x64\x61\x79';

/**
 * Signature that is rendered when there are no highlights.
 * @constant
 */
const Signature = () => {
  return (
    <div className="signature">
      <div className="text-center">
        No more highlights!
      </div>
      <pre>
        {BUNNY}
      </pre>
      <br/>
      <div>
        made by <a href="https://github.com/klimbin">kevin</a>
      </div>
    </div>
  )
}

export default Signature;
