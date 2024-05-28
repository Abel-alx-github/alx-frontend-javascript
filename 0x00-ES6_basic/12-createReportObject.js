/*
 * a module contain function defination
 */

export default function createReportObject(employeesList) {
  const allEmployees = {};
  for (const department of Object.keys(employeesList)) {
    if (department in employeesList) {
      allEmployees[department] = employeesList[department];
    }
  }

  const getNumberOfDepartments = (employeesList) => Object.keys(employeesList).length;

  return { allEmployees, getNumberOfDepartments };
}
