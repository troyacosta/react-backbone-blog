var React = require('react');
var BlogPostModel = require('../models/BlogPostModel');
var Backbone = require('backbone');

module.exports = React.createClass({
	getInitialState: function() {
		return({
			blogs: []
		});
	},
	componentWillMount: function() {
		var query = new Parse.Query(BlogPostModel);
			query.include('user');
			query.find().then( (blogs) => {
			this.setState({blogs: blogs});
		});
	},	
	render: function() {
			var posts = this.state.blogs.map(function(blog) {
			var date = blog.get('createdAt').toString().slice(0, 15);
			var user = blog.get('user');
			var poster = user.get('firstname') + ' ' + user.get('lastname');	
			return(
				<div className="blogPostContainer">
					<div>{blog.get('title')}</div>
					<div>{blog.get('blog')}</div>
					<div className="imageContainer"><img src={blog.get('image')}></img></div>
					<div><a href={"#userPage/"+user.id}>{poster}</a></div>
					<div>{date}</div>
				</div>
			)
		}).reverse();
		return(
			<section>
		 		{posts}
		 	</section>
		)
	}
});