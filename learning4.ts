//  Lambda expressions
let lambda1 = (name: string, age: number): string => {
  console.log('executing lambda 1');
  return `Lambda1 ${name} ${age}`;
};

let lambda2 = (): string => {
  console.log('executing lambda 2. No parameters so empty parentheses.');
  return 'This is a parameter-less lambda';
};

let lambda3 = (): string => 'Lambda3 No braces and no return required';

let lambda4 = (): void =>
  console.log('Lambda4 No need for braces. This line just executes.');

console.log(lambda1('Trident', 125));
console.log(lambda2());
console.log(lambda3());
lambda4();
