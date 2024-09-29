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
	res.json(posts);
})

// get single post
app.get('/api/posts/:id', (req, res) => {
	const id = parseInt(req.params.id);
	res.json(posts.filter(post => post.id === id));
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))