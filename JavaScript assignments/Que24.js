var foo = [];

for (var i = 1; i <= 100; i++) {
   foo.push(i);
}
const odds=foo.filter((num) => num%2 === 1);
const even=foo.filter((num) => num%2 === 0);
// console.log(odds);
console.log(even);