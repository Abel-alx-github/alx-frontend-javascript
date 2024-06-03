/*
 *
 * contain function defination
 */

export default function getStudentIdsSum(list) {
  const sumOfId = list.reduce((sum, elem) => sum + elem.id, 0);
  return sumOfId;
}
