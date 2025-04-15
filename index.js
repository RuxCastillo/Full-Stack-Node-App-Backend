import express from 'express';

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
	res.send('hola');
});

app.listen(PORT, () => {
	console.log('open port in: ', PORT);
});
