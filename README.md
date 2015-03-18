## is-pdf

pdf or not

### Usage

```js
var fs = require('fs');
var isPDF = require('is-pdf');

var bf1 = fs.readFileSync(__dirname+'/test/fixtures/pop.pdf');
console.log(isPDF(bf1)); // => true

var bf2 = fs.readFileSync(__dirname+'/test/fixtures/pop.gif');
console.log(isPDF(bf2)); // => false
```
