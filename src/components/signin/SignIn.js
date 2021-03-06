import React from 'react';
import './signin.css';

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      type: 'password'
    }
    this.showHide = this.showHide.bind(this);
  }
  
  showHide(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'text' ? 'password' : 'text'
    })  
  }

	render() {
		const { onRouteChange } = this.props;
		return (
			<div className="vh-100 dt w-100">
				<main className="pa4 black-80 dtc v-mid tc animated fadeIn">
				  <form className="main__div measure center ba pa4 br3 bw1 tc">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="title f2 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="labels db fw6 tl lh-copy f6" htmlFor="email-address">Email</label>
				        <input
									style={{outline: 'none'}}
				        	className="inputs pa2 f6 input-reset ba br2 bw1 w-100" 
				        	type="email" 
				        	name="email-address"  
				        	id="email-address"
				        />
				      </div>
				      <div className="mv3">
								<label className="labels db tl fw6 lh-copy f6" htmlFor="password">Password</label>
								<div className='inputs flex-auto flex flex-row b ba bw1 br2 w-100'>
									<input
										style={{outline: 'none'}}
										className="inputs pa2 input-reset bn w-100" 
										type={this.state.type}
										name="password"  
										id="password"
									/>
									<span className="pointer pa2 input-reset bn" 
										onClick={this.showHide}>{this.state.type === 'text' ? 'Hide' : 'Show'}</span>
								</div>
				      </div>
				    </fieldset>
				    <div className="">
				      <input 
				      	className="signin__btn b ph3 pv2 input-reset dib bw1 b--solid br3 fw7 pa3 pointer" 
				      	type="submit" 
				      	value="Sign in"
				      	onClick={() => onRouteChange('welcome')}
				      />
				    </div>
				    <div className="lh-copy mt3">
				      <a 
								href="#0" 
								className="f6 link dim light-gray db"
								onClick={() => onRouteChange('signup')}>Sign up</a>
				      <a href="#0" className="f6 link dim light-gray db">Forgot your password?</a>
				    </div>
				  </form>
				</main>
			</div>
		);
	}
}

export default SignIn;