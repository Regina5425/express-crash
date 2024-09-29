const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8000;

const app = express();

let posts = [
	{id: 1, title: 'Post One'},
	{id: 2, title: 'Post Two'},
	{id: 3, title: 'Post Three'},
]

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

// Get all posts
app.get('/api/posts', (req, res) => {
	const limit = parseInt(req.query.limit);

	if(!isNaN(limit) && limit > 0) {
		return res.status(200).json(posts.slice(0, limit));
	}

	res.status(200).json(posts);
})

// get single post
app.get('/api/posts/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const post = posts.find(post => post.id === id);

	if(!post) {
		return res.status(404).json({message: `A post with the id of ${id} was not found`})
	}

	res.status(200).json(post);
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))