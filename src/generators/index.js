function* gen() {
  yield 1;
  yield 2;
  yield 3
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);


function* iterate(arr) {
   for (let value of arr) {
    yield value
    
   }
  
 }

const it = iterate(['ddf', 'erer', 'lkjkl', 'erer', 'xvcb', 'hkl', 'huiop'])
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


