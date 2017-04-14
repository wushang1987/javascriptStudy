/**
 * 描述原型链集成的方法  写法2
 * Created by WWD on 2017/3/19.
 */

Function.prototype.method = function (name,fn) {
    this.prototype[name] = fn;
    return this;
}
var animat = function () {
    
};

animat.method('start',function () {
    console.log('test');
    
}).method('stop',function () {
    console.log('test2');
    
});

var animat = new animat();

animat.start();

