/**
 * 描述原型链集成的方法  写法一
 * Created by WWD on 2017/3/19.
 */

/**
 * class name
 */
var animat = function () {
    
};

animat.prototype.start = function () {
    console.log('test');
};

var animat = new animat();

animat.start();

