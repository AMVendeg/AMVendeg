// second solution with Object.fromEntries arrow function, return {}

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function matchMakingObject(girls: string[], boys: string[]): {} {
  let pairs2: {[key: string]: string} = {};
  pairs2 = Object.fromEntries(girls.map((_, value) => [girls[value], boys[value]]));
  return pairs2;
  }
  console.log(matchMakingObject(girls, boys));