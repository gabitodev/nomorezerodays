import React from 'react';

class ListItems extends React.Component {
	render() {
		const { items, deleteItem, setUpdate } = this.props;
		const list = items.map(item => {
			return (
				<div className='list' key={item.key}>
					<p>
						<input type="text" id={item.key} value={item.text} onChange={(e) => setUpdate(e.target.value, item.key)}/>
						<span onClick={() => deleteItem(item.key)} className='pointer'>&times;</span>
					</p>
				</div>
			)
		})
		return (
			<div>{list}</div>
		)
	}
}

export default ListItems;