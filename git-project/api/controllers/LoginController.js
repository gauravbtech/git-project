/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


	saveDetails: function (req, res) {

			var mysql      = require('mysql');
			var connection = mysql.createConnection({
			  host     : sails.config.dbConfig.host,
			  user     : sails.config.dbConfig.user,
			  password : sails.config.dbConfig.password,
			  database : sails.config.dbConfig.database
			});
			console.log("req : " +JSON.stringify(req.body));

			var items		=req.body;
			var firstName 	= items.user_name;
			var lastName 	= items.user_lastname;
			var companyName = items.company_name;
			var phone		= items.user_phone;
			var email		= items.user_email;
			var Password 	= items.user_password;
			 
			
			connection.connect(function(err) {
			  if (err) {
			    console.error('error connecting: ' + err.stack);
			    return;
			  }
			 
			  console.log('connected as id ' + connection.threadId);
			});
			
			connection.query('call usp_SignUpDetailsAdd(?,?,?,?,?,?)',[firstName,lastName, companyName,phone,email,Password], function(err, rows, fields) {
				if (err) throw err;
				res.json(JSON.parse(JSON.stringify(rows)));

			});
			 
			connection.end();
			//res.location('/login1');

		}	
};
