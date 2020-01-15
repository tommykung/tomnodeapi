const express = require('express');
const app = express();

const port = 11002; 

app.get('/testapitwo', function (req, res){
	console.log("enter testapitwo log");
	res.send('enter two');
});

app.listen(port, ()=> {
	console.log('Start server at port ='+port+' !');
});      