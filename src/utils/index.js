export function isInterger(val) {
  return val % 1 === 0;
}

export function formatLengthNumber(val) {
  const valToString = val.toString();
  return valToString.length > 6 ? valToString.slice(0, 6) + '...' : val;
}
