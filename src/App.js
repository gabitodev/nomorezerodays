import React from 'react';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import Landing from './components/landing/Landing';
import Navigation from './components/navigation/Navigation';
import Todo from './components/todo/Todo';
// import Quotes from './components/quotes/Quotes';
import './App.css';
import Particles from 'react-particles-js';
import particlesOptions from './assets/particlesjs-config.json';

const initialState = {
  input: '',
  route: 'welcome',
  isLoggedIn: false,
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
          ? <div>
              <Navigation onRouteChange={this.onRouteChange} />
              <div className='Main'>
                <Todo />
              </div>
            </div>
          : (
              <div>
              {(() => {
                switch (this.state.route) {
                  case 'signin':  return <SignIn onRouteChange={this.onRouteChange} />;
                  case 'signup':  return <SignUp onRouteChange={this.onRouteChange} />;
                  default:        return <Landing onRouteChange={this.onRouteChange} />;
                } 
              })()}
              </div>
            )
        }
			</div>  
    );
  }
}

export default App;