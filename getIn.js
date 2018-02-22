const user = {
  username: 'Sally',
  profile: {
    name: 'Sally Clojurian', address: {
      city: 'Austin', state: 'TX'
    }
  }
}

const getIn = (obj, ks, notFound = null) => {
  for (let i = 0; i < ks.length; i++) {
    if (obj == null) {
      return notFound;
    }
    obj = obj[ks[i]];
  }
  return obj === undefined ? notFound : obj
}

console.log(getIn(user, ['profile', 'name', 'pet'], 'Item not found!'));

