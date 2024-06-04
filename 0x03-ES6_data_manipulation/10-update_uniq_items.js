/*
 * Create a function named updateUniqueItems that
 * returns an updated map for all items with initial quantity at 1.
 * It should accept a map as an argument. The map it accepts for argument is
 * similar to the map you create in the previous task.
 * For each entry of the map where the quantity is 1, update the quantity to 100.
 * If updating the quantity is not possible (argument is not a map)
 * the error Cannot process should be thrown.
 *
 */

export default function updateUniqueItems(mapItem) {
  if (!mapItem || !(mapItem instanceof Map)) {
    throw new TypeError('Cannot process');
  }
  for (const [key, val] of mapItem) {
    if (val === 1) {
      mapItem.set(key, 100);
    }
  }
  return mapItem;
}
