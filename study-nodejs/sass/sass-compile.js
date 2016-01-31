var sass = require('node-sass');
var fs = require('fs');

sass.render({
  file: './first.scss',
  outputStyle: 'compressed',
  outFile: './first.css',
  sourceMap: true
}, function(error, result) {
  if (error) {
    console.log(error.status); // used to be "code" in v2x and below
    console.log(error.column);
    console.log(error.message);
    console.log(error.line);
  } else {
    console.log(result);
    // console.log(result.css.toString());

    fs.writeFile('./first.css', result.css, function(err) {
      if (err) {
        throw err;
      }
    });

    fs.writeFile('./first.map', result.map, function(err) {
      if (err) {
        throw err;
      }
    });

    // console.log(result.stats);
    // console.log(result.map.toString());
    // or better
    // console.log(JSON.stringify(result.map)); // note, JSON.stringify accepts Buffer too
  }
});
