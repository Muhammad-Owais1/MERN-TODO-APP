import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece]

export default function MyCalender() {

  const [value, onChange] = useState<Value>(new Date());

  const formatShortWeekday = (locale, date) => {
    return date.toLocaleDateString(locale, { weekday: 'short' }).charAt(0)
  }

  return (
    <div className='sm:mb-0 mb-20'>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
          .react-calendar * {
            font-family: "Poppins", sans-serif !important;
            font-weight: 600
          }
          .react-calendar {
            border: none; /* Remove default border */
            
            width: 40vw !important;
          }
          .react-calendar__month-view__days__day {
            border-top: 1px solid lightgrey !important; /* Horizontal lines */
            padding: 0 !important;
            height: 60px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center;
          }
          .react-calendar__month-view__days__day:hover {
            background: transparent !important;
            
          }
          .react-calendar__month-view__days__day:hover abbr {
            background: lightgrey;
            display: flex !important;
            align-items: center !important;
            justify-content: center;
            height: 30px;
            width: 30px !important;
            border-radius: 50%;
          }
          .react-calendar__month-view__days__day:first-of-type {
            border-top: none !important; /* Remove border from the first day element */
          }
          .react-calendar__month-view__days__day:nth-of-type(2) {
            border-top: none !important;
          }
          .react-calendar__month-view__days__day:nth-of-type(3) {
            border-top: none !important;
          } 
          .react-calendar__month-view__days__day:nth-of-type(4) {
            border-top: none !important;
          }
          .react-calendar__month-view__days__day:nth-of-type(5) {
            border-top: none !important;
          }
          .react-calendar__month-view__days__day:nth-of-type(6) {
            border-top: none !important;
          }
          .react-calendar__month-view__days__day:nth-of-type(7) {
            border-top: none !important;
          }
          .react-calendar__tile--now {
            background-color: transparent;
            color: white;
            font-weight: bold;
          }
          .react-calendar__tile--active:enabled:hover {
            background: transparent !important;
          }
          .react-calendar__tile--now abbr {
            background: black;
            display: flex !important;
            align-items: center !important;
            justify-content: center;
            height: 30px;
            width: 30px !important;
            border-radius: 50%;
          }
          .react-calendar__month-view__weekdays__weekday {
            font-weight: normal !important; 
            color: grey !important;
          }
          .react-calendar__month-view__weekdays__weekday abbr {
            text-decoration: none;
          }
          .react-calendar__navigation__label {
            pointer-events: none !important;
            cursor: not-allowed !important;
          }
          @media (max-width: 640px) {
            .react-calendar {
              width: 90vw !important;
            }
          }
        `}
      </style>
      <Calendar onChange={onChange} value={value} formatShortWeekday={formatShortWeekday} />
    </div>
  )
}
