var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var statusList = [
	{descricao: 'develop', ordem: 1},
	{descricao: 'test', ordem: 2},
	{descricao: 'tested', ordem: 3},
	{descricao: 'pull request', ordem: 4},
	{descricao: 'done', ordem: 5}
];

var branchs = [
	{id:1, branch: 'fase2/sprint9/CD-456', origem: 'stage', data: '10/07/2016 10:25', status: {descricao: 'pull request', ordem: 4}},
	{id:2, branch: 'fase3/sprint10/CD-1234', origem: 'stage', data: '08/08/2016 08:37', status: {descricao: 'develop', ordem: 1}},
	{id:3, branch: 'fase1/sprint07/CD-89', origem: 'master', data: '10/02/2016 08:25', status: {descricao: 'done', ordem: 5}}
];


app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/branchs', function(req, res) {
  res.json(branchs);
});

app.get('/branchs/:id', function(req, res) {
  branchs.forEach(function (branch) {
  	if (branch.id == req.params.id) {
  		res.json(branch);
  		return;
  	}
  });
  res.status(404).end();
});

app.post('/branchs', function(req, res) {
  req.body.id = branchs.length +1;
  branchs.push(req.body);
  res.json(true);
});

app.get('/status', function(req, res) {
  res.json(statusList);
});

app.listen(process.env.PORT || 3412);
