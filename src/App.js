import React from 'react';
import SignIn from './components/signin/SignIn';
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
    if (route === 'welcome') {
      this.setState({route: route})
    } else if (route === 'signin') {
      this.setState({route: 'signin'})
    }
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
    					: 'jeje'
    				)
    		}
			</div>    
    );
  }
}

export default App;