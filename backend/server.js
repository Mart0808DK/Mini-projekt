import express from 'express';
import fs from 'fs/promises';
import cors from 'cors';
import {v4 as uuidv4} from 'uuid';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
	const users = await fs.readFile('./data/users.json');
	res.send(JSON.parse(String(users)));
})

app.post('/', async (req, res) => {
	const users = await fs.readFile('./data/users.json');
	const usersArray = JSON.parse(String(users));
	const newUser = req.body;
	newUser.id = uuidv4();
	usersArray.push(newUser);
	await fs.writeFile('./data/users.json', JSON.stringify(usersArray));
	res.send(usersArray);
});

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});

