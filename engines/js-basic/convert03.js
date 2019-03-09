/**
 * UTIL TOOL, CONVERTS ARRAY-OF-ARRAYS INTO ARRAY-OF-OBJECTS (AOO).
 * node convert03.js ../../data/kx/habemus-papam.json > ../../data/kx/habemus-papam.aoo.json
 */

const fs=require('fs');
let file = process.argv[2] || '/dev/stdin'; // filename or STDIN

let j  = JSON.parse(  fs.readFileSync(file).toString()  ); // full Array-of-Arrays
let j0 = j.shift(); // first array (first line in the file)
let r  = j.map(     // maps array items (lines) to objects
  line  =>  Object.assign( ...j0.map((k, i) => ({[k]: line[i]})) )
);

console.log( JSON.stringify(r,null,2) )  // full Array-of-Objcts
