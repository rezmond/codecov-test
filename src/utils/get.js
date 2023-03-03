exports.get = (obj, path) => {
  let finalPath;

  if (typeof path === 'string') {
    finalPath = path.split('.');
  } else if (Array.isArray(path)) {
    finalPath = path;
  } else {
    throw new Error('Unknown path type')
  }

  return finalPath
    .reduce((acc, chunk) => acc[chunk], obj)
}