/**
 * Minimal "print 'Hello $x!'" for templating.
 * At termial run make or:
 *  node hello-list.js < ../../data/kx/givenName.csv
 */

let lines = require('fs').readFileSync('/dev/stdin', 'utf-8')
            .split('\n').filter(Boolean);

for(x of lines)
  console.log(` Olá ${x}!`);

console.log('')
