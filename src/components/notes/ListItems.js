import React from 'react';

class ListItems extends React.Component {
	render() {
		const { items, deleteItem } = this.props;
		const list = items.map(item => {
			return (
				<div className='list' key={item.key}>
					<p>{item.text} <span onClick={() => deleteItem(item.key)} className='pointer'>&times;</span></p>
				</div>
			)
		})
		return (
			<div>{list}</div>
		)
	}
}

export default ListItems;