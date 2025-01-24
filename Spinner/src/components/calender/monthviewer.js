
import { MonthGetDays } from '../../utils/month-utils';
import { TeamMember } from './TeamMember';

export function MonthViewer( {viewDate}) {
   
  daysList = MonthGetDays({viewDate});

  return (
    <div class="shadow ring-1 ring-black/5 lg:flex lg:flex-auto lg:flex-col">
      <div class="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs/6 font-semibold text-gray-700 lg:flex-none">
        <div class="flex justify-center bg-white py-2">
          <span>M</span>
          <span class="sr-only sm:not-sr-only">on</span>
        </div>
        <div class="flex justify-center bg-white py-2">
          <span>T</span>
          <span class="sr-only sm:not-sr-only">ue</span>
        </div>
        <div class="flex justify-center bg-white py-2">
          <span>W</span>
          <span class="sr-only sm:not-sr-only">ed</span>
        </div>
        <div class="flex justify-center bg-white py-2">
          <span>T</span>
          <span class="sr-only sm:not-sr-only">hu</span>
        </div>
        <div class="flex justify-center bg-white py-2">
          <span>F</span>
          <span class="sr-only sm:not-sr-only">ri</span>
        </div>
        <div class="flex justify-center bg-white py-2">
          <span>S</span>
          <span class="sr-only sm:not-sr-only">at</span>
        </div>
        <div class="flex justify-center bg-white py-2">
          <span>S</span>
          <span class="sr-only sm:not-sr-only">un</span>
        </div>
      </div>
      <div class="flex bg-gray-200 text-xs/6 text-gray-700 lg:flex-auto">
        <div class="w-full grid grid-cols-7 grid-rows-6 gap-px">
          {daysList.map((day) => (
            <div key={day} className={"relative px-3 py-2 flex justify-between " +(day.getMonth() === viewDate.getMonth() ? ' bg-white' : 'bg-gray-50 text-gray-500')} >
              {day.getDate()}
              <TeamMember viewDate={day}/>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}