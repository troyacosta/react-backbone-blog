var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	componentWillMount: function() {
		this.props.router.on('route', () => {
			this.forceUpdate();
		})
	},
	render: function() {
		var currentUser = Parse.User.current();
		var links = [];         
		if(currentUser) {
			links.push(<li><a href="#blogs">Blogs</a></li>);
			links.push(<li><a href="#create">Create New Blog</a></li>);
			links.push(<li><a href="#logOut">Log Out</a></li>);
			links.push(<li><a href={"#userPage/"+currentUser.id}>{currentUser.get('firstname')} {currentUser.get('lastname')}</a></li>);
		}
		else {
			links.push(<li><a href="#register">Register</a></li>);
            links.push(<li><a href="#login">Log In</a></li>);
		}
		return(
			<nav className="navbar navbar-default navbar-custom navbar-fixed-top">
        		<div className="container-fluid">
        			<div className="navbar-header page-scroll">
               	 		<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    		<span className="sr-only">Toggle navigation</span>
                    		<span className="icon-bar"></span>
                    		<span className="icon-bar"></span>
                    		<span className="icon-bar"></span>
                		</button>
                		<a className="navbar-brand" href="#home">HOME</a>
            		</div>
            		<div className="collapse navbar-collapse">
               	 		<ul className="nav navbar-nav navbar-right">
                    		{links}
                		</ul>
            		</div>
        		</div>
    		</nav>
		)
    }

});