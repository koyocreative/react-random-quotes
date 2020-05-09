import React from 'react'
import quotes from './quotes'
import QuoteAndAuthor from './QuoteAndAuthor'

class Quote extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			quote: quotes[0].quote,
			author: quotes[0].author,
		}
	}

	randomQuote() {
		const randomNumber = Math.floor(Math.random() * quotes.length)
		return quotes[randomNumber]
	}

	handleClick = () => {
		const generateRandomQuote = this.randomQuote()
		this.setState({
			quote: generateRandomQuote.quote,
			author: generateRandomQuote.author
		})
	}

	render() {
		return(
			<QuoteAndAuthor 
				handleClick={this.handleClick}
				{...this.state}
			/>
		)
	}
}
export default Quote