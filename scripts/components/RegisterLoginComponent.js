var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	getInitialState: function() {
		return { error: null};
	},
	render: function() {
		var errorElement = null;
		var url = Backbone.history.getFragment();
		if(this.state.error) {
			errorElement = (
				<p className="red">{this.state.error}</p>
			);
		}
		if(url === 'login') {
			return(
				<form className="loginForm">
  					<div className="form-group">
  						{errorElement}
    					<label>Email address</label>
    					<input type="email" className="form-control" ref="email" placeholder="Email" />
  					</div>
  					<div class="form-group">
    					<label>Password</label>
    					<input type="password" className="form-control" ref="password" placeholder="Password" />
  					</div>
  					<button type="submit" className="btn btn-default">Log On!</button>
				</form>
			)
		}
		else {
			return(
				<form className="registerForm">
  					<div className="form-group">
  						{errorElement}
    					<label>First Name</label>
    					<input type="text" className="form-control" ref="firstName" placeholder="First Name" />
  					</div>
  					<div class="form-group">
    					<label>Last Name</label>
    					<input type="text" className="form-control" ref="lastName" placeholder="Last Name" />
  					</div>
  					<div class="form-group">
    					<label>Email</label>
    					<input type="email" className="form-control" ref="email" placeholder="yourEmail@you.com" />
  					</div>
  					<div class="form-group">
    					<label>Password</label>
    					<input type="password" className="form-control" ref="password" placeholder="Password" />
  					</div>
  					<button type="submit" className="btn btn-default">Register!</button>
				</form>
			)
		}
	}
});