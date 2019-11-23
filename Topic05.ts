//  User defined types: class
class Car {
  //  Fields. let or const are not allowed here!
  uninitializedField: number; //  Type annotation, making it type-safe
  field = 'Initialized string'; //  Automatic type inference if initialized at the time of declaration, type-safe as well.
  initializedFieldWithTypeAnnotation: string = 'This is verbose';
  private aPrivateField = true; //  By default everything is public, but accessible in this module only, unless exported

  //    Readonly fields are either initialized or set in constructor
  readonly valueHere: string;

  //    Constructor
  constructor() {
    //  fields and methods are to be referred with this.
    this.valueHere = 'Some value goes here';
  }

  //    Methods cannot have function keyword
  methodInClass() {
    //...
  }

  //    Method parameters and return values can also be type annotated
  method1(param: string): number {
    return 0;
  }

  //    Method can choose to return value of several finite types
  method2(): string | boolean | number {
    return true;
  }

  //    Method parameters can be of several finite types
  method3(p1: string | number, p2: boolean | string): void {
    //...
  }

  //    A getter is a special method.
  //    It is a method inside itself but behaves like a field outside
  //    This method has to return something
  get someValue(): number {
    //    Used as x = this.someValue as opposed to x = this.someValue()
    return 100;
  }

  //    Using function expressions is allowed.
  //    Internally treated as a field
  method4 = (param1, param2): number => {
    //...
    return 10;
  };

  //    Default parameters to a method
  method5(param = 100) {
    //...
  }
}
