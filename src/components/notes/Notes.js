import React from 'react';
import ListItems from './ListItems';
import './notes.css';

class Notes extends React.Component {
	constructor(props) {
		super(props)
		this.state= {
			items: [],
			currentItem: {
				text: '',
				key: ''
			}
		}
	this.handleInput = this.handleInput.bind(this);
	this.addItem = this.addItem.bind(this);
	this.deleteItem = this.deleteItem.bind(this);
	this.setUpdate = this.setUpdate.bind(this);
	}
	
	handleInput(e) {
		this.setState({
			currentItem: {
				text: e.target.value,
				key: Date.now()
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
					key: ''
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

	render() {
		return (
			<div className='bg-white ma2 br3 ba bw1 b--light-silver w-50-ns'>
				<form className='f3 bg-light-red flex justify-between' onSubmit={this.addItem}>
					<input
						className='pa2 w-80 outline-0 bg-light-red white' 
						type='text' 
						placeholder='Create Todo...'
						value={this.state.currentItem.text}
						onChange={this.handleInput}
					 />
					<button className='w-20 flex justify-center bg-white outline-0' type='submit'><ion-icon name="add"></ion-icon></button>
				</form>
				<div className='overflow-auto vh-50'>
					<ListItems
					items={this.state.items} 
					deleteItem={this.deleteItem} 
					setUpdate={this.setUpdate}/>
				</div>
			</div>
		)
	}
}

export default Notes;