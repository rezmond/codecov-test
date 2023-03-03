const { groupBy } = require('../groupBy');

describe('groupBy', () => {
  it.each`
    collection    | iteratee                  | result
    ${['a', 'b']} | ${undefined}              | ${{ 'a': ['a'], 'b': ['b'] }}
    ${['a', 'b']} | ${(x) => x === 'a'}       | ${{ true: ['a'], false: ['b'] }}
    ${[
      { 'x': 'aa' },
      { 'x': 'b' }
    ]}            | ${'x.length'}  | ${{ 2: [{ 'x': 'aa' }], 1: [{ 'x': 'b' }] }}
  `('#) $collection => $result', ({ collection, iteratee, result }) => {
      expect(groupBy(collection, iteratee)).toEqual(result);
    })
});