/**
 * 描述原型链集成的方法  写法3
 * Created by WWD on 2017/3/19.
 */

Function.prototype.method = function (name,fn) {
    this.prototype[name] = fn;
}
var animat = function () {
    
};

animat.method('start',function () {
    console.log('test');
    
});

animat.method('stop',function () {
    console.log('test2');
    
});

var animat = new animat();

animat.start();

