import React from 'react'
import Item from './PlanningItem.jsx'

const CalendarMonth = props => (
  <div className='CalendarMonth'>
    <ul className='CalendarMonth-list'>
      <li className='CalendarMonth-item'>L</li>
      <li className='CalendarMonth-item'>M</li>
      <li className='CalendarMonth-item'>M</li>
      <li className='CalendarMonth-item'>J</li>
      <li className='CalendarMonth-item'>V</li>
      <li className='CalendarMonth-item'>S</li>
      <li className='CalendarMonth-item'>D</li>
    </ul>
    <ul className='CalendarMonth-list'>
      <CalendarOften day={props.days[0].day.getDay()} />
      { props.days.map((item, index) => {
        return (
          <Item
            key={item.day.getDate()}
            item={item.day}
          />
        )
      })}
    </ul>
  </div>
)

const CalendarOften = props => {
  let dayOften = props.day - 1
  let len = dayOften < 0 ? 6 : dayOften

  return (
    [...Array(len)].map((item, index) => {
      return <li key={index} className='CalendarMonth-item'></li>
    })
  )
}

export default CalendarMonth
