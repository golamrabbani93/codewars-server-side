const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send('Code war server is runing');
});

app.listen(port, () => {
	console.log(`Code war server is runing on port ${port}`);
});
