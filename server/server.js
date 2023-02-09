const express = require("express");
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/users.router');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', userRoutes);


app.listen(3000, () => {
	console.log('listening on PORT 3000...');
})