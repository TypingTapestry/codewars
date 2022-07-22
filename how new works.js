let myObj = {};
myObj.__proto__ = MyObject.prototype;
myObj.constructor = MyObject;
myObj.constructor();