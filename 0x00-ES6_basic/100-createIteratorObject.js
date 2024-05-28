/*
 * a module contain function defination
 */

export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const listNameOfEmployees = [];
  for (const employee in allEmployees) {
    if (employee in allEmployees) {
      listNameOfEmployees.push(...allEmployees[employee]);
    }
  }
  return listNameOfEmployees;
}
