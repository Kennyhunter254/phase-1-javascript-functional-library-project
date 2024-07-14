// myEach function
function myEach(collection, callback) {
    if (Array.isArray(collection) || typeof collection === 'string') {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else if (typeof collection === 'object' && collection !== null) {
      for (const key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  // myMap function
  function myMap(collection, callback) {
    const mappedArray = [];
    myEach(collection, item => mappedArray.push(callback(item)));
    return mappedArray;
  }
  function myReduce(collection, callback, initialValue) {
    let accumulator;
    let startIndex;
  
    if (initialValue !== undefined) {
      accumulator = initialValue;
      startIndex = 0;
    } else if (Array.isArray(collection) && collection.length > 0) {
      accumulator = collection[0];
      startIndex = 1;
    } else if (typeof collection === 'object' && collection !== null) {
      const keys = Object.keys(collection);
      if (keys.length > 0) {
        accumulator = collection[keys[0]];
        startIndex = 1;
      }
    }
  
    if (accumulator === undefined) {
      throw new TypeError('Reduce of empty collection with no initial value');
    }
  
    if (Array.isArray(collection)) {
      for (let i = startIndex; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], i, collection);
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const keys = Object.keys(collection);
      for (let i = startIndex; i < keys.length; i++) {
        const key = keys[i];
        accumulator = callback(accumulator, collection[key], key, collection);
      }
    }
  
    return accumulator;
  }
  
  // myFind function
  function myFind(collection, predicate) {
    for (const item of collection) {
      if (predicate(item)) {
        return item;
      }
    }
    return undefined;
  }
  
  // myFilter function
  function myFilter(collection, predicate) {
    const filteredArray = [];
    myEach(collection, item => {
      if (predicate(item)) {
        filteredArray.push(item);
      }
    });
    return filteredArray;
  }
  
  // mySize function
  function mySize(collection) {
    if (Array.isArray(collection) || typeof collection === 'string') {
      return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
      return Object.keys(collection).length;
    }
    return 0;
  }
  
  // myFirst function
  function myFirst(collection, n = 1) {
    if (!Array.isArray(collection) && (typeof collection !== 'string')) {
      return [];
    }
    if (n === 1) {
      return collection[0];
    }
    return collection.slice(0, n);
  }
  
  // myLast function
  function myLast(collection, n = 1) {
    if (!Array.isArray(collection) && (typeof collection !== 'string')) {
      return [];
    }
    if (n === 1) {
      return collection[collection.length - 1];
    }
    return collection.slice(-n);
  }
 // myKeys function
function myKeys(object) {
    if (typeof object !== 'object' || object === null) {
      return [];
    }
    return Object.keys(object);
  }
  
  // myValues function
  function myValues(object) {
    const values = [];
    myEach(object, value => values.push(value));
    return values;
  }
  
  // Exporting functions for testing purposes
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues,
  };
  