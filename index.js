const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

//*send all courses Category
app.get('/course-category', (req, res) => {
	res.send(categories);
});
//* send all Courses
app.get('/courses', (req, res) => {
	res.send(courses);
});
app.get('/', (req, res) => {
	res.send('Code war server is runing');
});

app.listen(port, () => {
	console.log(`Code war server is runing on port ${port}`);
});
