import React from 'react';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import Landing from './components/landing/Landing';
import './App.css';
import Particles from 'react-particles-js';
import particlesOptions from './assets/particlesjs-config.json';

const initialState = {
  input: '',
  route: 'welcome',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    joined: ''
  }
}


class App extends React.Component {
	constructor() {
    super()
    this.state = initialState;
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    return (
    	<div className='App'>
    		<Particles className='particles' params={particlesOptions}/>
    		{ this.state.route === 'welcome' 
    			? <Landing onRouteChange={this.onRouteChange} />
    			: (
    					this.state.route === 'signin' 
    					? <SignIn /> 
    					: <SignUp />
    				)
    		}
			</div>    
    );
  }
}

export default App;