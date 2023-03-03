exports.get = (obj, path) =>
  path
  .split('.')
  .reduce((acc, chunk) => acc[chunk], obj)