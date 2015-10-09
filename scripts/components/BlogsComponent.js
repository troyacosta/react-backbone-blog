var React = require('react');
var BlogPostModel = require('../models/BlogPostModel');


module.exports = React.createClass({
	getInitialState: function() {
		return({
			blogs: []
		});
	},
	componentWillMount: function() {
		var query = new Parse.Query(BlogPostModel);
		query.find().then( (blogs) => {
			this.setState({blogs: blogs})
		})
	},
	render: function() {
		var posts = this.state.blogs.map(function(blog) {
			var date = blog.get('createdAt').toString().slice(0, 15);
			return(
				<div>
					<div>{blog.get('title')}</div>
					<div>{blog.get('blog')}</div>
					<img src={blog.get('image')}></img>
					<div>{blog.get('user').get('firstname')}</div>
					<div>{date}</div>
				</div>
			)
		}).reverse();
		return(
			<section onClick={this.goToUserPage}>
		 		{posts}
		 	</section>
		)
	},
	goToUserPage: function() {
	}
});