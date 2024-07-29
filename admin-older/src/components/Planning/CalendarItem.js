import React from 'react'
import Paper from '@material-ui/core/Paper'

import CalendarMonth from './CalendarMonth'

const Calendar = props => (
  <Paper elevation={5}>
    <header className='Calendar-header'>
      <p className='Calendar-header-year'>{ props.year }</p>
      <h2 className='Calendar-header-title'>{ props.item.month }</h2>
    </header>
    <article className='Calendar-body'>
      <CalendarMonth days={ props.item.days } />
    </article>
  </Paper>
)

export default Calendar
