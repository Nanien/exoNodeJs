
var mysql = require('mysql');

 
//console.log('Get connection ...');
 
var connexion = mysql.createConnection({
  database: 'connexion_node_js',
  host: "localhost",
  user: "root",
  password: ""
});
 
connexion.connect(function(err)
 {
  if (err) throw err;
  console.log("Connected!");
});


 // SUPPRIMER LES TABLES DES UTILISATEURS SI ELLES EXISTENT //
    var supprimer = "DROP TABLE IF EXISTS user ";
 
    connexion.query(supprimer, function(err, results) {
        if (err) throw err;
        console.log("supprimer");
    });



 // Creation de la table USER //

    var table1 = "CREATE TABLE user " +
        " (Id INT not null AUTO_INCREMENT, " +
        " Nom VARCHAR(255), " +
        " Prenom VARCHAR(255), " +
        " Email VARCHAR(255), " +
        " Pass VARCHAR(255), " +
        " PRIMARY KEY (Id) )";

    connexion.query(table1, function(err, results) 
    {
        if (err) throw err;
        console.log("Table user crée");
         });

         var Nom = ["KONE"];
         var Prenom = ["OUMAR"];
         var Email = ["fatimatnyl2016@gmail.com"];
         var Pass = ["123456"];

         // INSERTION DESDONNEES DANS LA TABLE USER //
        for (var i = 0; i < Nom.length; i++)
          {
            var insertion = "Insert into user (Nom, Prenom, Email, Pass)" 
            +
            " Values ('" + Nom[i] + "', '" + Prenom[i] + "', '" + Email[i] + "', '" + Pass[i] + "')";
 
            connexion.query(insertion, function(err, results)
          {
            if (err) throw err;
            console.log("Insertion réussie!");
            });
          }
 
    
