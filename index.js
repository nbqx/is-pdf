var PDF = '^%PDF';
module.exports = function(buf){
  var buf = (Buffer.isBuffer(buf))? buf : (new Buffer(buf)),
      h = String.fromCharCode.apply(null,Array.prototype.slice.call(buf.slice(0,4))),
      r = new RegExp(PDF);
  return r.test(h);
};
