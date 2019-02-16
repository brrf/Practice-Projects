var React = require('React');
var PropTypes = require('prop-types');

function PlayerPreview (props) {

	return (
		<div className='column'>
			<img className='avatar'
				src={props.image}
			/>
			<h2>@{props.username} </h2>
			{props.children}
		</div>
	)
}

PlayerPreview.propTypes = {
	image: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
}

module.exports = PlayerPreview;