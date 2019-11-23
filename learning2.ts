//  Throwing errors and catching them

function foo() {
  throw new Error('This is the error message'); //  This is the base class of all errors. In TS and JS, we call exceptions as errors.
}

try {
  foo();
} catch (error) {
  //  Inside the catch you cannot use type annotation. catch (error: Error) is a compilation error

  //  Every error, provided it is or extends the Error class has 3 useful properties name, message, and stack. name is the error class name. message is what is passed to the error's constructor and stack is the error stack.
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

//  We can derive our own custom error class from the base Exception class
class CustomError extends Error {
  //  As we know, the error message is given in the constructor. This should be passed to the base class' constructor.
  constructor(message: string) {
    //super() is the way we call base class constructor from the derived class
    super(message);

    // This is required because of the JS prototypal inheritance mechanism. Here we need to manually set the prototype.
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

function bar() {
  throw new CustomError('This is custom error');
}

try {
  bar();
} catch (error) {
  if (error instanceof CustomError) {
    //  Since we cannot apply type annotation to catch block, nor can we have multiple catch blocks as in other languages, we have to use this if-else mechanism with instanceof operator to check the specific kind of error
    console.log('Caught the custom error');
  } else {
    // change the bar() in try block to foo() to reach this else block
    console.log('Caught a normal error');
  }
} finally {
  //  finally runs in any case. typically used to clear/close the resources used by the try block.
  console.log('This runs in any case');
}
