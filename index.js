// This is just a test to check out the workflow
// of using play.js

var faker = require('faker')

var aName = faker.name.findName();

console.log(aName)

console.log(faker.name.findName());

// Now some edits from vscode

console.log(faker.name.firstName());
console.log(faker.name.lastName());

