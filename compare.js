const isObject = function(input){
  return input instanceof Object;
};

const compareKeyValues = function(actual, expected) {
  var actualKeys = Object.keys(actual);
  var expectedKeys = Object.keys(expected);

  return actualKeys.every(function(key, i) {
    if(key !== expectedKeys[i]){
      return false;
    }

    if(isObject(actual[key])){
      if(actual[key] === actual){
        return true;
      }
      return compareKeyValues(actual[key], expected[key]);
    }

    if(actual[key] !== expected[key]){
      return false;
    }

    return true;
  });
};

module.exports = function(actual, expected) {
  if(actual === expected){
    return true;
  }
  return compareKeyValues(actual, expected);
};