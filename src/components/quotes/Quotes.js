import React from 'react';

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
			return <div className=''>Loading...</div>
		} else {
			return (
				<div className='bg-white'>
					<p> Frase: {ramdomQuote.text} </p>
					<p> Autor: {ramdomQuote.author} </p>
				</div>
			)
		}
	}

}

export default Quotes;