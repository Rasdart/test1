const userLogin = (req, res) => {
	console.log('user logged correctly');
	res.status(200).send('<h1>hello</h1>')
}

module.exports = {
	userLogin,
}