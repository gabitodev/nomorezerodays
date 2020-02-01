 import React from 'react';

class SignUp extends React.Component {
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
		return (
			<div className="vh-100 dt w-100">
				<main className="pa4 black-80 dtc v-mid tc animated fadeIn">
				  <form className="measure center ba b--light-silver pa4 bg-white tc">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f2 fw6 ph0 mh0">Sign Up</legend>
					  <div className="mt3">
							<label className="db fw6 tl lh-copy f6" htmlFor="name">Name</label>
							<input
								style={{outline: 'none'}}
								className="pa2 f6 input-reset ba br2 bw1 b--light-silver bg-light-gray hover-bg-white hover-black w-100" 
								type="text" 
								name="name"  
								id="name"
							/>
						</div>
						<div className="mt3">
							<label className="db fw6 tl lh-copy f6" htmlFor="email-address">Email</label>
							<input
								style={{outline: 'none'}}
								className="pa2 f6 input-reset ba br2 bw1 b--light-silver bg-light-gray hover-bg-white hover-black w-100" 
								type="email" 
								name="email-address"  
								id="email-address"
							/>
						</div>
				      <div className="mv3">
							<label className="db tl fw6 lh-copy f6" htmlFor="password">Password</label>
							<div className='flex-auto flex flex-row b ba bw1 br2 b--light-silver bg-light-gray hover-bg-white hover-black w-100'>
								<input
									style={{outline: 'none'}}
									className="pa2 input-reset bn bg-light-gray hover-bg-white hover-black w-100" 
									type={this.state.type}
									name="password"  
									id="password"
								/>
								<span className="pointer pa2 input-reset bn bg-light-gray hover-bg-light-red hover-white" 
									onClick={this.showHide}>{this.state.type === 'text' ? <ion-icon className='tc v-mid' name="eye"></ion-icon> : <ion-icon name="eye-off"></ion-icon>}</span>
							</div>
				      </div>
				    </fieldset>
				    <div className="">
				      <input 
				      	className="b ph3 pv2 input-reset dib link bw1 bg-white b--solid b--light-red light-red fw7 pa3 br3 hover-white hover-bg-light-red pointer" 
				      	type="submit" 
				      	value="Sign Up"
				      />
				    </div>
				  </form>
				</main>
			</div>
		);
	}
}

export default SignUp;