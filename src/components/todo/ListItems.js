import React from 'react';
import './listitems.css';

class ListItems extends React.Component {
	render() {
		const { items, deleteItem, setUpdate, changeChecked } = this.props;
		const list = items.map((item, idx) => {
			return (
				<div className='list' key={item.key}>
					<p className='flex justify-between f4 animated fadeIn a3 d2 reverse'>
						<label className='checkbox__container'>
							<input type="checkbox" defaultChecked={item.checked} onChange={() => changeChecked(idx)}/><span className='checkmark'></span>
						</label>
						<input 
							className='light-red pa2 w-80 outline-0 bn'
							type='text' 
							id={item.key} 
							value={item.text} 
							onChange={(e) => setUpdate(e.target.value, item.key)}/>
						<span onClick={() => deleteItem(item.key)} className='pointer w-20 bg-light-gray red flex justify-center items-center hover-bg-red hover-white link'>&times;</span>
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