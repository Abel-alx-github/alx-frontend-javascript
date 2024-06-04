/*
 *
 *
 * Create a function named createInt8TypedArray that
 * returns a new ArrayBuffer with an Int8 value at a specific position.
 * It should accept three arguments: length (Number), position (Number), and value (Number).
 * If adding the value is not possible the error Position outside range should be thrown.
 */

export default function createInt8TypedArray(length, position, value) {
  if (!Number.isInteger(length) || length < 0) {
    throw new TypeError('Length must be a non-negative integer');
  }

  if (!Number.isInteger(position) || position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  if (!Number.isInteger(value) || value < -128 || value > 127) {
    throw new TypeError('Value must be a valid Int8 (between -128 and 127)');
  }

  const buffer = new ArrayBuffer(length);

  const int8Array = new Int8Array(buffer);

  int8Array[position] = value;

  return int8Array;
}
