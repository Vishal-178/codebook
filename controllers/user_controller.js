const user = require('../models/user');
module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title:"Profile Page"
    })
}
module.exports.login = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile')
    }
    return res.render('login',{
        title:"Login",
        error:""
    })
}

module.exports.signup =function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile')
    }
    return res.render('signup',{
        title:"Signup"
    })
}

module.exports.create = function(req,res){
    if(req.body.password !== req.body.repassword){
        return res.end('password dont match');
    }
    user.findOne({email: req.body.email},function(err,userData){
        if(err){console.log("error while creating user while signup");return}
                
        if(!userData){
            user.create(req.body,(err,userData)=>{
                if(err){console.log("error while creating user while signup");return}
                return res.redirect('/users/login');
            })
        }else{
            return req.redirect('back');
        }
    });
    // user.create(req.body,(err,userData)=>{
    //     if(err){
    //         console.log('error while pushing data to data base');
    //         return;
    //     }
    //     console.log(`****data added sucessfuly****** ${userData}`);
    //     return res.redirect('/users/login');
    // });
}

// auth or section
//* sign in and create a section for the user.
module.exports.auth = function(req,res){
    // comment of this function is also avilable in other branch in github (manual-local-auth)
    return res.redirect('/');
}


// signout or destroy session
module.exports.signout = function(req,res){
    req.logout();
    return res.redirect('/');
}