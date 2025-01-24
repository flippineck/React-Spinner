export function isSpinnable(day) {
  const today = new Date();
  if (day < today) {
    return false;
  }
  if ( day.getDay() === 0 || day.getDay() === 6) {
    return false;
  }

  return true;
}