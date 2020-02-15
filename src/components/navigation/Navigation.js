import React from 'react';

class Navigation extends React.Component {
	render() {
		return (
			<div className='bg-light-red flex flex-row justify-around'>
				<h3 className='pl2 w-75 w-90-l tl white'> Welcome Back!, Gabriel</h3>
				<button className='w-25 w-10-l tc bn bg-black white'>SignOut</button>
			</div>
		)
	}
}

export default Navigation;