const getLogin=function(req,res){
    res.render("login");
}

const postLogin=function(req,res){
    res.send("OK");
}

module.exports={getLogin,postLogin}