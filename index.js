const express = require('express');

const app = express();

const port = process.env.PORT || 5000;
var cors = require('cors');
const categories = require('./data/categories.json');
const courses = require('./data/courses.json');
const blog = require('./data/blog.json');
const faq = require('./data/faq.json');

app.use(cors());
//*send all courses Category
app.get('/course-category', (req, res) => {
	res.send(categories);
});
//* send all Blog Qouestion
app.get('/blog', (req, res) => {
	res.send(blog);
});
//* send all faq
app.get('/faq', (req, res) => {
	res.send(faq);
});
//* send all Courses
app.get('/courses', (req, res) => {
	res.send(courses);
});
//* send single Courses by Id
app.get('/course-details/:id', (req, res) => {
	const id = req.params.id;
	const details = courses.find((c) => c.id === id);
	res.send(details);
});
app.get('/', (req, res) => {
	res.send('Code war server is runing');
});

app.listen(port, () => {
	console.log(`Code war server is runing on port ${port}`);
});
