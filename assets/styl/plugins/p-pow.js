module.exports = function(){
  return function(style){
    style.define('p-pow', function(a, b) {
      return Math.pow(a, b);
    });
  };
}