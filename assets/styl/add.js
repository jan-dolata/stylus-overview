var plugin = function(){
  return function(style){
    style.define('dodaj', function(a, b) {
      return a.operate('+', b);
    });
  };
};
module.exports = plugin;
