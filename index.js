'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {
    let num1 = Number(event.num1)
    let num2 = Number(event.num2)
    let result = num1+num2
    callback(null,"The sum of "+num1+" and "+num2+" is:"+result) 
};
