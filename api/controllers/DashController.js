module.exports = {
	checkUser: function(req, res) {
		if(!req.session.me) {
			return res.view('login');
		} else {
			return res.view('dashboard');
		}
	},
	getUser: function(req, res) {
		User.findOne({id:req.session.me}, function(err, user){
			if(err) {
				return res.negotiate();
			}

			return res.send(user);
		});
	}
}