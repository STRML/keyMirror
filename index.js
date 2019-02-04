export default function(prefix, obj) {
  const ret = {}
  let key
  if (!(obj instanceof Object && !Array.isArray(obj))) {
    throw new Error('keyMirrorPrefix(...): Argument must be an object.')
  }
  for (key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      ret[key] = prefix ? `${prefix}_${key}` : key
    }
  }
  return ret
}
