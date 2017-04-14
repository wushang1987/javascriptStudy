/**
 * 匿名函数写法
 */
(function() {
    var foo = 10;
    var bar = 2;
    console.log(foo*bar);
    
})();

(function(foo,bar) {
    console.log(foo*bar);
    
})(12,20);