//  Generic method example
//  This genericFoo function is generic in the sense that the type of the parameter it takes can be determined at the runtime. But, it offers type safety.
//  To really appreciate the idea of generics, consider this method is given to us in a compiled form. The original developer wanted this function to be used with any type, but ensured his function is type safe. This is unlike using the notorious 'any' type annotation, which is just lousy. The T here is the generic type parameter. We could use any letter or word identifier here. We can also use comma separated multiple type parameters so long as they are unique. <First, Second> or <TKey, TValue> is also possible. Using T (for type) comes from C#.

function genericFoo<T>(arr: T[]): number {
  console.log('This is just an example. We just return a hardcoded number');
  return 10;
}

function lousyFoo(arr: any): number {
  return -1;
}

function anotherLousyFoo(arr: any[]): number {
  return 0;
}

//  type safety and generic behaviour.
console.log(genericFoo<number>([1, 2, 3, 4]));
//  console.log(genericFoo<number>([1, 2, 3, 'error']));    //  Cannot break the type safety!
console.log(genericFoo<string>(['this', 'is', 'a', 'string', 'array']));

//  You will now appreciate why you should be wary of 'any'
console.log(lousyFoo('This could take anything'));
console.log(lousyFoo(100));
console.log(lousyFoo([1, 2, 3, 'anything']));

//  This just ensures the parameter is an array
console.log(anotherLousyFoo([1, 'lousy', false]));
