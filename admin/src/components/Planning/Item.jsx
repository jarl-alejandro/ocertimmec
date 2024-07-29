import React from 'react'
import { connect } from 'react-redux'
import planningAction from '../../actions/planning.action'

const Item = props => (
	<li className='CalendarMonth-item day' onClick={props.selectedDay}>
		{ props.item.getDate() }
	</li>
)

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	selectedDay () {
		dispatch(planningAction.selectedDay(ownProps.item))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Item)
