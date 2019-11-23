"use strict";
// Callbacks
//  Let's define a normal function (also called as a named function)
function callbackFunction() {
    console.log('named callback called!');
}
//  This is a special kind of function. It expects another function as its first parameter. The idea is, this function will eventually invoke (or call) the function that we pass to it as an argument after something happens. This is the realm of asynchronous or non-blocking operation in JS/TS. Think of a backend API call. The get call will take sometime to return the result. Instead of blocking the current execution thread (by the way JS/TS is a single threaded execution model), we provide the long-running function a callback, a function which it in turn will call when it is ready. In case of a get request handler, it will call our callback perhaps with the data or error. Generally, the callbacks are little functions and it doesn't make much sense to declare them as named functions. But this could be done anyway. Working with callbacks is the cornerstone of JS or functional programming.
setTimeout(callbackFunction, 5000);
//  Anonymouse function usage
//  Since we said there is not much sense in declaring a named function, we can write a throw-away function in-line.
setTimeout(function () {
    //  Observe this function doesn't have a name. Hence the anonymous function.
    console.log('anonymous callback called');
}, 5000);
//  Lambda expressions or arror functions or fat arrow functions
//  These are anonymous functions under the hood.
setTimeout(() => console.log('lambda callback called'), 5000);
