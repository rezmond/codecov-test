const { identity } = require('./identity');
const { get } = require('./get');

exports.groupBy = (collection, iteratee = identity) => {
  const finalIteratee = typeof iteratee !== 'string' ?
  iteratee:
  (item) => get(item, iteratee);

  const reduceItem = (acc, item) => {
    const key = finalIteratee(item);
    const group = (acc[key] ?? []).concat(item);
    return {...acc, [key]: group};
  };

  return collection.reduce(reduceItem, {})
}