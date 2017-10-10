/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	// signup function
	signup:function(req, res){
		var Passwords = require('machinepack-passwords');

		// Encript Password
		Passwords.encryptPassword({
			password: req.param('password'),
			difficulty:10
		}).exec({
			error: function(err){
				return res.negotiate(err);
			},
			success: function(encriptedPassword) {
				require('machinepack-gravatar').getImageUrl({
					emailAddress:req.param('email')
				}).exec({
					error: function() {
						return res.negotiate(err);
					},
					success: function(gravatarUrl) {
						// Create User
						User.create({
							name:req.param('name'),
							email:req.param('email'),
							password: encriptedPassword,
							lastLoggedIn : new Date(),
							gravatarUrl : gravatarUrl
						}, function userCreated(err, newUser){
							if(err) {
								console.log(err);
								return res.negotiate(err);
							}

							// SESSION VAR
							console.log('User Added');

							return res.json({
								id: newUser.id
							});
						});
					}
				})
			}
		})
	}
};

