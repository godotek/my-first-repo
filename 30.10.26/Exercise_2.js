const phoneBook = new Map();

phoneBook.set('Ivanov', '+7-900-111-22-33');
phoneBook.set('Petrova', '+7-900-444-55-66');
phoneBook.set('Sidorov', '+7-900-777-88-99');

console.log(phoneBook.get('Petrova'));

phoneBook.delete('Sidorov');

console.log(phoneBook.size);
console.log(phoneBook.has('Sidorov'));

const employees = [...phoneBook.keys()];
console.log(employees);

phoneBook.forEach(function(number, name) {
  console.log(name + ": " + number);
});