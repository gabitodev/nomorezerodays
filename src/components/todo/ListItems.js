import React from 'react';

class ListItems extends React.Component {
	render() {
		const { items, deleteItem, setUpdate } = this.props;
		const list = items.map(item => {
			return (
				<div className='list' key={item.key}>
					<p className='flex justify-between f4'>
						<input 
							className={`light-red pa2 w-80 outline-0 bn`}
							type='text' 
							id={item.key} 
							value={item.text} 
							onChange={(e) => setUpdate(e.target.value, item.key)}/>
						<span onClick={() => deleteItem(item.key)} className='pointer w-20 bg-light-gray red flex justify-center items-center'>&times;</span>
					</p>
				</div>
			)
		});
		return (
			<div>{list}</div>
		)
	}
}

export default ListItems;