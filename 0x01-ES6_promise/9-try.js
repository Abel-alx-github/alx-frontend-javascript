/*
 * a module contain function defination
 */

export default function guardail(mathFunction) {
  const queue = [];
  try {
    const res = mathFunction();
    queue.push(res);
  } catch (error) {
    queue.push(String(error));
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
