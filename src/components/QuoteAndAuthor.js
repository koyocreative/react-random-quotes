import React from 'react'

class QuoteAndAuthor extends React.Component {
	render() {
		return (
			<div className="single-quote" >
				<h1 className="quote">"{this.props.quote}"</h1>
				<h3 className="author"> - { this.props.author ? this.props.author : "Unknown" } -</h3>
				<button id="newquote" onClick={this.props.handleClick}>New Quote</button>
			</div>
		)
	}
}
export default QuoteAndAuthor