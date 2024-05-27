export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    // eslint-disable-next-line
    array[array.indexOf(idx)] = appendString + idx;
  }

  return array;
}
