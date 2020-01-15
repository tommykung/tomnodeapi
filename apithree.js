const express = require('express');
const app = express();

const port = 11003; 

app.get('/testapithree', function (req, res){
	console.log("enter testapithree log");
	res.send('enter three');
});

app.listen(port, ()=> {
	console.log('Start server at port ='+port+' !');
});    