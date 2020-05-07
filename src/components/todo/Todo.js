import React from 'react';
import ListItems from './ListItems';
import './todo.css';

class Todo extends React.Component {
	constructor(props) {
		super(props)
		this.state= {
			items: [],
			currentItem: {
				text: '',
				key: '',
				checked: false
			}
		}
	this.handleInput = this.handleInput.bind(this);
	this.addItem = this.addItem.bind(this);
	this.deleteItem = this.deleteItem.bind(this);
	this.setUpdate = this.setUpdate.bind(this);
	this.completedCount = this.completedCount.bind(this);
	this.changeChecked = this.changeChecked.bind(this);
	this.incompleteCount = this.incompleteCount.bind(this);
	}
	
	handleInput(e) {
		this.setState({
			currentItem: {
				text: e.target.value,
				key: Date.now(),
				checked: false
			}
		});
	}

	addItem(e) {
		e.preventDefault(); // Previene lo default del boton.
		const newItem = this.state.currentItem;
		if (newItem.text !== '') {
			const newItems = [...this.state.items, newItem];
			this.setState({
				items: newItems,
				currentItem: {
					text: '',
					key: '',
					checked: false
				}
			});
		}
	}

	deleteItem(key) {
		const filteredItems = this.state.items.filter(item => item.key !== key);
		this.setState({
			items: filteredItems
		})
	}

	setUpdate(text, key) {
		const items = this.state.items;
		items.forEach(item => {
			if (item.key === key) {
				item.text = text;
			}
		})
		this.setState({items: items})
	}

	changeChecked(idx) {
		const items = this.state.items;
		items[idx].checked = !items[idx].checked;
		this.setState({items});
	}
	
	incompleteCount() {
		return this.state.items.filter(item => !item.checked).length;
	}

	completedCount() {
		return this.state.items.filter(item => item.checked).length;
	}

	render() {
		return (
			<div className='mierda_mierda ma2 br3 ba bw1 w-50-ns'>
				<form className='f3 bg-light-red flex justify-between' onSubmit={this.addItem}>
					<input
						className='todo pa2 w-80 outline-0' 
						type='text' 
						placeholder='Create Todo...'
						value={this.state.currentItem.text}
						onChange={this.handleInput}
					 />
					<button className='add_btn w-20 flex justify-center outline-0' type='submit'><ion-icon name='add'></ion-icon></button>
				</form>
				<div className='overflow-auto vh-50'>
					<ListItems
					changeChecked={this.changeChecked}
					items={this.state.items} 
					deleteItem={this.deleteItem} 
					setUpdate={this.setUpdate}/>
				</div>
				<div>
					<p className='status_bar bt bw1 pa1 tc ma0 flex justify-center w-100'> 
						<span className='all__btn br3 ma1 pa2 white'>All: {this.state.items.length}</span> 
						<span className='bg-green br3 ma1 pa2 white'>Completed: {this.completedCount()}</span>
						<span className='bg-red br3 ma1 pa2 white'>Incompleted : {this.incompleteCount()}</span>
					</p>
				</div>
			</div>
		)
	}
}

export default Todo;