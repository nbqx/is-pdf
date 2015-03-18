var fs = require('fs');
var test = require('tape'),
    colorize = require('tap-colorize');

var isPDF = require('../.');

test.createStream().pipe(colorize()).pipe(process.stdout);

test('pdf',function(t){
  var b = fs.readFileSync(__dirname+'/fixtures/pop.pdf');
  t.ok(isPDF(b),'this is pdf');
  t.end();
});

test('not pdf',function(t){
  var b = fs.readFileSync(__dirname+'/fixtures/pop.gif');
  t.notOk(isPDF(b),'this is not pdf');
  t.end();
});
