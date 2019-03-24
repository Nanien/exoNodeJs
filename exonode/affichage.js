var mysql = require('mysql');
 
var connexion = mysql.createConnection({
  database: 'connexion_node_js',
  host: "localhost",
  user: "root",
  password: ""
});
 
  const http = require('http');

 http.createServer((req, res) => {

 	var affichage = 'SELECT * FROM user';

 	connexion.query(affichage,function affiche(error, results, fields) 
 	{
 	    if (error)
 	    {
 	      console.log(error);
 	      connexion.end();
 	      return;
 	    }
	      
 	    if ( results.length > 0 )  
 	    { 
         
 	      var firstResult = results[ 0 ];
 	      console.log('id: ' + firstResult['id']);
 	      console.log('Nom: ' + firstResult['Nom']);
 	      console.log('Prenom: ' + firstResult['Prenom']);
 	      console.log('Email: ' + firstResult['Email']);
 	      console.log('Pass: ' + firstResult['Pass']);
 	    } 
 	    else
 	    {
 	      console.log("Pas de données");
	    }
 	    connexion.end();
 	  }
 	);
 
      res.end()
 }).listen(8090)




// const express = require('express');  
// const bodyParser = require('body-parser');  
// const url = require('url');  
// const querystring = require('querystring');  
// const Article = require('./models').Article;

// let app = express();  
// app.use(bodyParser.urlencoded({ extended: false }));  
// app.use(bodyParser.json());

// // Function to handle the root path
// app.get('/', async function(req, res) {

//     // Access the provided 'page' and 'limt' query parameters
//     let page = req.query.page;
//     let limit = req.query.limit;

//     let articles = await Article.findAll().paginate({page: page, limit: limit}).exec();

//     // Return the articles to the rendering engine
//     res.render('index', {
//         articles: articles
//     });
// });

// let server = app.listen(8090, function() {  
//     console.log('Server is listening on port 8090')
// });
	
