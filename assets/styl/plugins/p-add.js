module.exports = function(){
  return function(style){
    style.define('p-add', function(a, b) {
      return a.operate('+', b);
    });
  };
}
