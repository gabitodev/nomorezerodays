import React from 'react';
import './navigation.css';

class Navigation extends React.Component {
	render() {
		const { onRouteChange } = this.props;
		return (
			<div>
				<h3 className='user-info'> Welcome Back! Gabriel</h3>
				<div className='menu-wrap'>
					<input type='checkbox' className='toggler'/>
					<div className='hamburger bg-light-red'><div></div></div>
					<div className="menu">
						<div>
							<div>
								<ul>
									<li>
										<p>Notes</p>
									</li>
									<li>
										<p>Todo</p>
									</li>
									<li>
										<p onClick={() => onRouteChange('landing')}>Sign Out</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Navigation;