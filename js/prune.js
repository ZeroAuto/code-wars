const person = {
  "name": "John",
  "age": 30,
  "married": true,
  "retired": false,
  "kids": ["Ann", "Billy"],
  "dogs": null,
  "cats": 0,
  "properties": {
    "homes": [],
    "rentals": []
  },
  "loans": [],
  "cars": [
    {
      "model": "BMW 230",
      "mpg": 27.5,
      "vin": "",
      "manual": true,
      "accidentHistory": []
    },
    {
      "model": "Ford Edge",
      "mpg": 24.1,
      "features": []
    },
    [
      {
        "model": "Tesla Model S",
        "mpg": null,
        "accidentHistory": []
      }
    ]
  ]
}

person.test = [];
/**
* Takes in an objects and removes all the key-value pairs that
* have an empty array in them.
*
*@example
* ```js
* // { "properties": {"homes": [], "rentals": []} }
* // becomes
* // { "properties": { } }
* ```
*
* @param input {object} Dynamic object with possible nested values.
*/
function prune(obj) {
  for (let key in obj) {
    if (Array.isArray(obj[key]) && obj[key].length === 0) {
      delete obj[key];
    } else if (typeof obj[key] === 'object') {
      prune(obj[key])
    }
  };
  return obj;
}

console.log(JSON.stringify(prune(person), null, 2));
