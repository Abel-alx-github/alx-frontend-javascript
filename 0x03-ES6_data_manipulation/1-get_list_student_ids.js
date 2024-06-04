/*
 * a module contain function defination
*/

export default function getListStudentIds(list) {
  if (!Array.isArray(list) {
    return [];
  }
  const keys = [];

  list.map((elem) => keys.push(elem.id));
  return keys;
}
