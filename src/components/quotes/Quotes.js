import React from 'react';
import './quotes.css';

class Quotes extends React.Component {
	constructor(props) {
		super();
		this.state = {
			error: null,
			isLoaded: false,
			quotes: []
		};
	}

	componentDidMount() {
		fetch('https://type.fit/api/quotes')
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						quotes: result
					});
				},
				(error) => {
					this.setState({
						isLoaded: false,
						error
					});
				}
			)
	}

	render() {
		const { error, isLoaded, quotes } = this.state;
		const ramdomQuote = quotes[Math.floor(quotes.length * Math.random())];
		if (error) {
			return <div>Error: {error.message}</div>
		} else if (!isLoaded) {
			return <div className='loading br3 ba bw1'>Loading...</div>
		} else {
			return (
				<div className='message br3 ba bw1 '>
					<p> {ramdomQuote.text} </p>
					<p> ~ {ramdomQuote.author} ~ </p>
				</div>
			)
		}
	}

}

export default Quotes;