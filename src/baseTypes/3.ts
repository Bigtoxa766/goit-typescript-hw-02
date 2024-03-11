// let some:unknown;
// some = 'Text';
// let str: string;
// str = some;

function getSome() {
  return 'Text';
}

let someData: unknown = getSome(); 
if (typeof someData === 'string') {
  // console.log(someData); 
}

export {};