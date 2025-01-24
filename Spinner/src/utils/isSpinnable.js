export function isSpinnable(day) {
  var today = new Date();
  today.setHours(0,0,0,0);
  var checkDay = new Date(day);
  checkDay.setHours(0,0,0,0);
    
  if (checkDay < today) {
    return false;
  }
  if ( checkDay.getDay() === 0 || checkDay.getDay() === 6) {
    return false;
  }

  return true;
}