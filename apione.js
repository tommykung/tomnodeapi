const express = require('express');
const app = express();

const port = 11001; 

app.get('/testapione', function (req, res){
	console.log("enter testapione log");
	res.send('enter one test pass');
});

app.listen(port, ()=> {
	console.log('Start server at port ='+port+' !');
}); 
