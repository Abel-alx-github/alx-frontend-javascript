/*
 * a module contain function defination
*/

export default function getListStudentIds(list) {
  if (typeof list !== typeof []) {
    return [];
  }
  const keys = [];
  for (const obj of list) {
    keys.push(obj.id);
  }
  return keys;
}
