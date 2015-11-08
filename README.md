#Base62Sequence
This module produces integer sequences in base 62

##Install
```
    npm install base62sequence
```
##Quick Examples
```js
var Sequence= require('base62sequence');

var example1= new Sequence(0);
var example2= new Sequence("g7");
// 0
console.log(example1.next());
// 1
console.log(example1.current());
//g7
//999
console.log(example2.current());
// true
console.log(example2.isBase36("g7"));
//g7
example2.encode(999);
//999
example2.decode("g7");
```