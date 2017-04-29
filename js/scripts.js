var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Adam', 'Marek', 'Paweł', 'Jan'];

var allNames = femaleNames.concat(maleNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
	allNames.push('Marian');
}

console.log('Wynik:');
console.log(allNames);

