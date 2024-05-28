/*
*  a module contain function defination
*/

export default function iterateThroughObject(reportWithIterator) {
  let listName = '';
  for (const name of reportWithIterator) {
    if (listName) {
      listName += ` | ${name}`;
    } else {
      listName += name;
    }
  }
  return listName;
}
