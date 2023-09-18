const friend = friends => friends.filter((word) => word.length === 4);

console.log(friend(["Ryan", "Kieran", "Mark"])); // ['Ryan', 'Mark']
console.log(friend( ["Ryan", "Kieran", "Jason", "Yous"])); // ['Ryan', 'Yous']
