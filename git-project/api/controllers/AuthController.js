/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var passport = require('passport');
module.exports = {
	index: function (req,res)
    {
        res.view();
    },

    passport_local: function(req, res)
    {
        passport.authenticate('local', function(err, user, info)
        {console.log("passport_local"+JSON.stringify(req.body));
            if ((err) || (!user))
            {	console.log("passport_local err or user "+ 'err.stack' +" :::::"+user);
                res.redirect('/');
                return;
            }

            req.logIn(user, function(err)
            {
                if (err)
                {
                	console.log("passport_local use err");
                    res.redirect('/user/login');
                    return;
                }
                req.session.user = user;
                console.log("passport_local :: "+req.session.passport.user+"::"+JSON.stringify(user));
                res.redirect('/loginq');
                return;
            });
        })(req, res);
    },

    logout: function (req,res)
    {
        req.logout();
        req.session.user = ""
        res.redirect('/');
    }
};
module.exports.blueprints = {
  actions: true,
  rest: true,

  shortcuts: true
	
};


