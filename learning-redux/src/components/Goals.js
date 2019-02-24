import React from 'react'
import {connect} from 'react-redux'
import List from './List'
import {
	handleAddGoal,
	handleDeleteGoal,
} from '../actions/Goals'

class Goals extends React.Component {

	addItem = (e) => {
		e.preventDefault();
		this.props.dispatch(handleAddGoal(
			this.input.value,
			() => this.input.value = ''
		))
	}

	removeItem = item => {
		this.props.dispatch(handleDeleteGoal(item));
	}

	render () {
		return (
			<div>
				<h1>Goals</h1>
				<input 
					placeholder='Add Goal'
					type='text'
					ref={(input) => this.input = input}
				/>
				<button onClick={this.addItem}>
					Add Goal
				</button>
				<List items={this.props.goals}
					  removeItem={this.removeItem}/>
			</div>
		)
	}
}

export default connect( (state) => ({
	goals: state.goals
}))(Goals)