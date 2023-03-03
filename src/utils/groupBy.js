const { identity } = require('./identity');
const { get } = require('./get');

const addToPossibleArray = (arr, item) =>
  (arr ?? []).concat(item)

const getIteratee = (iteratee) => {
  if (typeof iteratee !== 'string') {
    return iteratee;
  }

  return (item) => get(item, iteratee);
}

exports.groupBy = (collection, iteratee = identity) => {
  const finalIteratee = getIteratee(iteratee);

  const reduceItem = (acc, item) => {
    const key = finalIteratee(item);
    const group = addToPossibleArray(acc[key], item);
    return {...acc, [key]: group};
  };

  return collection.reduce(reduceItem, {})
}