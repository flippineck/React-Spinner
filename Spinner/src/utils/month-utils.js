export function MonthGetDays({viewDate}){
  const dayList = [];

  var firstDay = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
  
  var firstDayIndex = firstDay.getDay();
  if (firstDayIndex !== 0) {
    firstDay.setDate(firstDay.getDate() - (firstDayIndex-1));
  }

  for(let i=1; i<=42; i++){
    dayList.push(new Date(firstDay));
    firstDay.setDate(firstDay.getDate() + 1);
  }
  
  return dayList;
}

export function SubtractMonth(date) {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() - 1);
  return newDate;
}

export function AddMonth(date) {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + 1);
  return newDate;
}