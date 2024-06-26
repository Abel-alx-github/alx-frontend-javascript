/*
 * a module contain class defination
 */

export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('The code must be a string');
    }
    this._code = code;

    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('The code must be a string');
    }
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
