const map = {
  username: 'Sally',
  profile: {
    name: 'Sally Clojurian', address: {
      city: 'Austin', state: 'TX'
    }
  }
};

const vector = [[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]];

const mixed = {
  username: 'Jimmy',
  pets: [{
    name: 'Rex',
    type: 'dog'
  },
  {
    name: 'Sniffles',
    type: 'Hamster'
  }]
};

const getIn = (obj, ks, notFound = null) => {
  for (let i = 0; i < ks.length; i++) {
    obj = obj[ks[i]];
  }
  return obj === undefined ? notFound : obj
}

//Map
console.log('---Map---');
console.log(getIn(map, ['profile', 'name']));
console.log(getIn(map, ['profile', 'address', 'city']));
console.log(getIn(map, ['profile', 'address', 'zip-code']));
console.log(getIn(map, ['profile', 'address', 'zip-code'], 'no zip code!'));
//Vector
console.log('---Vector---');
console.log(getIn(vector, [0,2]));
console.log(getIn(vector, [2,1]));
//Mixed
console.log('---Mixed---');
console.log(getIn(mixed, ['pets', 1, 'type']));

