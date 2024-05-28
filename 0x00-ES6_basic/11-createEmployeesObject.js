/*
 * a module contains function defination
 */

export default function creaeEmployeesObject(departmentName, employees) {
  const key = `${departmentName}`;
  return { [key]: employees };
}
