import React from 'react';

import { TeamContext } from '../data/TeamProvider';
import { Spintop } from "../spintop/spintop";
import { MonthViewer } from './monthviewer';
import { AddMonth, SubtractMonth } from '../../utils/month-utils';

export function MonthDiary({viewDate,setViewDate})
{
  const theTeam = React.useContext(TeamContext);
  return (
    <div class="lg:flex lg:h-full lg:flex-col">
      <header class="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
        <h1 class="text-base font-semibold text-gray-900">
        {viewDate.toLocaleString('default', { month: 'long' })} {viewDate.getFullYear()}
        </h1>
        <div class="flex items-center">
          <div class="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
            <button onClick={()=>{const newDate = SubtractMonth(viewDate);setViewDate(newDate)}} type="button" class="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50">
              <span class="sr-only">Previous month</span>
              <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
              </svg>
            </button>
            <button onClick={()=>{setViewDate(new Date())}}  type="button" class="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block">Today</button>
            <span class="relative -mx-px h-5 w-px bg-gray-300 md:hidden"></span>
            <button onClick={()=>{const newDate = AddMonth(viewDate); setViewDate(newDate)}} type="button" class="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50">
              <span class="sr-only">Next month</span>
              <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          <div class="ml-4 flex items-center">
            <Spintop teamMembers={theTeam.Members}/>
          </div>

        </div>
      </header>
      <MonthViewer  viewDate={viewDate}/>

    </div>

    );
}