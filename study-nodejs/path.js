var path = require('path');

console.log(path.normalize('/this//is/a/something/../././path'));
console.log(path.join('this', 'is', '/a/', 'path'));
console.log(path.resolve('/this', 'is/what', '../.', 'a', 'path'));
console.log(path.isAbsolute('/yes'));
console.log(path.relative('/this/is/a/', '/path'));
console.log(path.dirname('/this/is/a/path.txt'));
console.log(path.basename('/this/is/a/path.txt'));
console.log(path.basename('/this/is/a/path.txt', '.txt'));
console.log(path.extname('path.txt'));
console.log(path.sep);
console.log(path.parse('/this/is/a/path.txt'));
console.log(path.format({dir: 'this/is', base: 'file.txt'}));
