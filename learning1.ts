//  Enum is a type. These are named constants. Meaning, these are simply labels that are mapped to numbers
//  By default the first label is mapped to 0 and next to 1 and so on.
//  You can set them explicitly, but take care to ensure uniqueness.
//  You use an enum as any other data type. Observe the dot notation.
//  For example, let cat = Category.Novel;
enum Category {
  Technical, //  default value 0
  Novel,
  Poetry,
  Fiction = 5, //  explicitly set to 5
  Children //  curiously this is now 6 instead of intuitive 4
}

interface Book {
  price: number; //  In TS, interfaces can declare fields but cannot provide initialization
  borrow(user: string): boolean; //  method signature.
}

class FictionBook implements Book {
  //  Surprise! price field is not declared as a normal field in this class. It is rather declared as a getter. As you remember, a getter is internally a method but for a consumer, it is a field. From interface's point of view, the getter is a field. So no compilation error.
  pages = 345; //  Remember, everything is by default public, unless you specifically mark it as public
  category = Category.Fiction;

  constructor(private priceField: number) {} //  Constructor parameters are like declaring readonly fields in the class scope and initializing inside constructor.

  borrow(user: string): boolean {
    console.log(`User ${user} borrowed this book on ${new Date()}`);
    return true;
  }

  get price(): number {
    return this.priceField; //  This is the real utility. Instead of returning the actual field, we are abstracting the field by this getter method.
  }
}

class ChildrenBook implements Book {
  pages = 125;
  category = Category.Children;

  constructor(private priceField: number) {}

  borrow(user: string): boolean {
    console.log(`User ${user} borrowed this book on ${new Date()}`);
    return true;
  }

  get price(): number {
    return this.priceField;
  }
}

function operate(book: Book): void {
  //  Observe this method accepts an argument of type Book interface. We can pass objects of any class that cares to implement this interface. This is how we use the interfaces for exploiting the polymorphic behaviour.
  book.borrow('Test user'); //  foo function doesn't know anything about which concrete object was passed. It can invoke the borrow method because the interface declares this method. This is the loose coupling in action.
  console.log(book.price);
}

operate(new FictionBook(500)); //  passing concrete objects to a function that takes these objects as of interface type
operate(new ChildrenBook(245));

//  Please remember, you cannot instantiate interface by itself like a class.

//  let book = new book();      //  this is an error! interface cannot new up!

//  But you can instantiate a concrete class as of interface type provided, the class implements the interface.

let book: Book = new FictionBook(500); //  Type of the book is interface Book and not FictionBook. This is similar to C#.
