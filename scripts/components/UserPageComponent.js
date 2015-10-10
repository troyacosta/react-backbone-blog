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
		query.equalTo('user', new Parse.User({objectId: this.props.userId}));
		find().then( (blogs) => {
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