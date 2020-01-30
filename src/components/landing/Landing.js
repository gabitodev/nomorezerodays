import React from 'react';
import './landing.css';

class Landing extends React.Component {
	render() {
		const { onRouteChange } = this.props;
		return (
			<article className="vh-100 dt w-100">
					<div className="dtc v-mid tc black ph3 ph4-l">
				    <h1 className="f1 f2-m f-subheadline-l fw8 tc">No More Zero Days!</h1>
				    <h3 className="f5 f2-m f-subheadline-l fw4 tc">An application to improve your productivity</h3>
				    <div className=''>
				    	<input 
			      	className="sign_in b ma3 ph3 pv2 input-reset dib link bw1 b--solid b--light-red light-red fw7 pa3 br3 hover-white hover-bg-light-red pointer" 
			      	type="submit" 
			      	value="Sign in"
			      	onClick={() => onRouteChange('signin')}
			      	/>
			      	<input 
				      	className="sign_in b ph3 pv2 input-reset dib link bw1 b--solid b--black black fw7 pa3 br3 hover-white hover-bg-black pointer" 
				      	type="submit" 
				      	value="Sign Up"
			      	/>
				    </div>
			  	</div>
			</article>
		)
	}
}

export default Landing;