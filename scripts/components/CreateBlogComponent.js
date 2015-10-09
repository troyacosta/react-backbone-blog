var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function() {
		return(
			<section>
				<h1>Create Blog Page</h1>
				<form className="newBlogForm">
  					<div className="form-group">
    					<label>Title</label>
    					<input type="text" className="form-control" ref="title" placeholder="title" />
  					</div>
  					<div className="form-group">
    					<label>Password</label>
    					<input type="password" className="form-control" ref="password" placeholder="Password" />
  					</div>
  					<button type="submit" className="btn btn-default">Post!</button>
				</form>
			</section>
			)
	}

});